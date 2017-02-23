from flask import Flask, render_template, request, flash, redirect, session
from mysqlconnection import MySQLConnector
from flask.ext.bcrypt import Bcrypt

import re

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = '25a6268d097ecb49bfbcc4323755ab5e'

mysql = MySQLConnector(app, 'blogginator')

def valid_email(email):
    regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
    if not re.match(regex, email):
        return False
    else:
        return True

def user_found(email):
    email_check = 'SELECT * FROM users WHERE email = :email'
    email_check_data = {'email' : email}
    users = mysql.query_db(email_check, email_check_data)
    if(users):
        return users[0]
    else:
        return False

def user_find_by_id(id):
    user_query = 'SELECT * FROM users WHERE id = :id'
    user_data = {'id' : id}
    users = mysql.query_db(user_query, user_data)
    if(users):
        return users[0]
    else:
        return False

def validate_register_fields(first_name, last_name, email, password, password_confirm):
    if len(password) < 8:
        flash('Passwords needs to be greater than 8 characters', 'password')
    if password != password_confirm:
        flash('Passwords need to match', 'password_confirm')
    if len(first_name) < 3:
        flash('First name needs to be at least three characters', 'first_name')
    if len(last_name) < 3:
        flash('Last name needs to be at least three characters', 'last_name')
    if not valid_email(email):
        flash('Valid email needed', 'email')
    if user_found(email):
        flash('Email already exists', 'email')

def create_user(first_name, last_name, email, password):
    password_hash = bcrypt.generate_password_hash(password)
    add_user = 'INSERT INTO users(first_name, last_name, email, password_hash, created_at) \
                VALUES(:first_name, :last_name, :email, :password_hash, now())'
    user_data = {
        'first_name' : first_name,
        'last_name' : last_name,
        'email': email,
        'password_hash': password_hash
    }
    user_id = mysql.query_db(add_user, user_data)
    return user_id

def create_post(content):
    create_post ='INSERT INTO posts(content, user_id, created_at) VALUES(:content, :user_id, now())'
    post_data = {'content': content, 'user_id': session['user']['id']}
    mysql.query_db(create_post, post_data)

def create_comment(content, post_id, user_id):
    create_comment ='INSERT INTO comments(content, post_id, user_id, created_at) VALUES(:content, :post_id, :user_id, now())'
    comment_data = {'content': content, 'post_id': post_id, 'user_id': user_id}
    mysql.query_db(create_comment, comment_data)

def get_posts():
    get_posts = 'SELECT posts.id, posts.content, DATE_FORMAT(posts.created_at, "%b %d %Y %h:%i %p") as "created_at", posts.user_id, \
                CONCAT(users.first_name, " ", users.last_name) as "full_name"  \
                FROM posts \
                JOIN users ON users.id=posts.user_id \
                ORDER BY created_at desc'
    posts = mysql.query_db(get_posts)
    return posts

def get_comments():
    get_comments = 'SELECT comments.id, comments.post_id, comments.user_id, comments.content, DATE_FORMAT(comments.created_at, "%b %d %Y %h:%i %p") as "created_at", \
                CONCAT(users.first_name, " ", users.last_name) as "full_name"  \
                FROM comments \
                JOIN users ON users.id=comments.user_id \
                ORDER BY created_at desc'
    comments = mysql.query_db(get_comments)
    return comments

def get_comment(comment_id):
    get_comment = 'SELECT * FROM comments WHERE id=:id'
    comment_data = {'id': comment_id}
    comments = mysql.query_db(get_comment, comment_data)
    if(comments):
        return comments[0]
    else:
        return False

def comment_delete(comment_id):
    delete_comment = 'DELETE FROM comments WHERE id=:comment_id'
    delete_data = {'comment_id': comment_id}
    mysql.query_db(delete_comment, delete_data)

def get_post(post_id):
    get_post = 'SELECT * FROM posts WHERE id=:id'
    post_data = {'id': post_id}
    posts = mysql.query_db(get_post, post_data)
    if(posts):
        return posts[0]
    else:
        return False

def post_delete(post_id):
    delete_comments = 'DELETE FROM comments WHERE post_id=:post_id'
    delete_data = {'post_id': post_id}
    mysql.query_db(delete_comments, delete_data)

    delete_post = 'DELETE FROM posts WHERE id=:post_id'
    delete_data = {'post_id': post_id}
    mysql.query_db(delete_post, delete_data)

def assign_session(user):
    user.pop('email')
    user.pop('password_hash')
    session['user'] = user

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']

    user = user_found(email)
    if(user):
        if bcrypt.check_password_hash(user['password_hash'], password):
             flash('You have successfully logged in!', 'success')
             assign_session(user)
             return redirect('/posts')
        else:
            flash('Your email or password is incorrect!', 'error')
            return redirect('/')
    else:
        flash('Your email or password is incorrect!', 'error')
        return redirect('/')

@app.route('/register', methods=['POST'])
def register():
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    password = request.form['password']
    password_confirm = request.form['password_confirm']

    validate_register_fields(first_name, last_name, email, password, password_confirm)

    if '_flashes' in session:
        return redirect('/')

    user = create_user(first_name, last_name, email, password)
    user = user_find_by_id(user_id)
    flash('You have successfully registered!', 'success')
    assign_session(user)
    return redirect('/posts')

@app.route('/posts', methods=('GET', 'POST'))
def posts():
    if request.method == 'POST':
        content = request.form['content']
        create_post(content)
        return redirect('/posts')
    posts = get_posts()
    comments = get_comments()
    return render_template('posts.html', posts=posts, comments=comments)

@app.route('/comments', methods=["POST"])
def comments():
    content = request.form['content']
    post_id = request.form['post_id']
    user_id = session['user']['id']

    create_comment(content, post_id, user_id)
    return redirect('/posts')

@app.route('/comment/<comment_id>/delete', methods=["POST"])
def delete_comment(comment_id):
    comment = get_comment(comment_id)
    if not session['user']['id'] == comment['user_id']:
        flash('Not your comment, fool!')
        return redirect('/posts')
    comment_delete(comment['id'])
    return redirect('/posts')

@app.route('/post/<post_id>/delete', methods=["POST"])
def delete_post(post_id):
    post = get_post(post_id)
    if not session['user']['id'] == post['user_id']:
        flash('Not your post, fool!')
        return redirect('/posts')
    post_delete(post['id'])
    return redirect('/posts')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')

app.run(debug=True)
