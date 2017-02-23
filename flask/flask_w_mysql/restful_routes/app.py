from flask import Flask, render_template, redirect, url_for
from mysqlconnection import MySQLConnector
from forms import NewUserForm

app = Flask(__name__)
mysql = MySQLConnector(app, 'restful_users2')
app.secret_key = '9c05391d57eac1b4e91dc69918451d58'

def get_users():
    query = 'SELECT * FROM users'
    return mysql.query_db(query)

def create_user(data_object):
    query = 'INSERT INTO users(first_name, last_name, email, created_at) \
             VALUES(:first_name, :last_name, :email, now())'
    data = {
        'first_name': data_object['first_name'],
        'last_name': data_object['last_name'],
        'email': data_object['email']
    }

    user_id = mysql.query_db(query, data)
    return user_id

def update_user(data_object, id):
    query = 'UPDATE users SET \
             first_name = :first_name, last_name = :last_name, email = :email \
             WHERE id=:id'
    data = {
        'first_name': data_object['first_name'],
        'last_name': data_object['last_name'],
        'email': data_object['email'],
        'id': id
    }

    mysql.query_db(query, data)

def delete_user(id):
    query = 'DELETE FROM users WHERE id=:id'
    data = { 'id': id  }
    mysql.query_db(query, data)

def find_user_by_id(id):
    query = 'SELECT * FROM users WHERE id=:id'
    data = {'id': id}
    users = mysql.query_db(query, data)
    return users[0]

@app.route('/users')
def index():
    users = get_users()
    return render_template('index.html', users=users)

@app.route('/users/new', methods=['GET'])
def new():
    form = NewUserForm()
    return render_template('new.html', form=form)

@app.route('/users/create', methods=['POST'])
def create():
    form = NewUserForm()
    if form.validate_on_submit():
        user_id = create_user(form.data)
        return redirect('/users/' + str(user_id))
    return render_template('new.html', form=form)

@app.route('/users/<id>')
def show(id):
    user = find_user_by_id(id)
    return render_template('show.html', user=user)

@app.route('/users/<id>/edit')
def edit(id):
    user = find_user_by_id(id)
    form = NewUserForm()
    return render_template('edit.html', form=form, user=user)

@app.route('/users/<id>', methods=['POST'])
def update(id):
    user = find_user_by_id(id)
    form = NewUserForm()
    if form.validate_on_submit():
        update_user(form.data, id)
        return redirect('/users/' + id)
    return render_template('edit.html', form=form, user=user)

@app.route('/users/<id>/delete')
def delete(id):
    delete_user(id)
    return redirect('/users')


app.run(debug=True)
