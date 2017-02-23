from flask import Flask, render_template, request, flash, redirect, session
from mysqlconnection import MySQLConnector
from flask.ext.bcrypt import Bcrypt

import re

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = 'd1297e7a4b244565ebe55e124aab42b7'

mysql = MySQLConnector(app, 'Users')

def valid_email(email):
    regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
    if not re.match(regex, email):
        return False
    else:
        return True

def email_found(email):
    email_check = 'SELECT * FROM users WHERE email = :email'
    email_check_data = {'email' : email}
    return mysql.query_db(email_check, email_check_data)

def validate_register_fields(first_name, last_name, email, password, password_confirm):
    if len(password) < 8:
        flash('Passwords needs to be greater than 8 characters', 'error')
    if password != password_confirm:
        flash('Passwords need to match', 'error')
    if len(first_name) < 3 or len(last_name) <3:
        flash('First and Last names need to be at least three characters', 'error')
    if not valid_email(email):
        flash('Valid email needed', 'error')
    if email_found(email):
        flash('Email already exists', 'error')

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
    mysql.query_db(add_user, user_data)

@app.route('/register', methods=('GET', 'POST'))
def register():
    if request.method == 'POST':
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        email = request.form['email']
        password = request.form['password']
        password_confirm = request.form['password_confirm']

        validate_register_fields(first_name, last_name, email, password, password_confirm)

        if '_flashes' in session:
            return redirect('/register')

        create_user(first_name, last_name, email, password)

        flash('You have successfully registered!', 'success')
        session['user'] = email
        return redirect('/profile')

    return render_template('register.html')

@app.route('/login', methods=('GET', 'POST'))
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        user = email_found(email)
        if(user):
            if bcrypt.check_password_hash(user[0]['password_hash'], password):
                 flash('You have successfully logged in!', 'success')
                 session['user'] = email
                 return redirect('/profile')
            else:
                flash('Your email or password is incorrect!', 'error')
                return redirect('/login')
        else:
            flash('Your email or password is incorrect!', 'error')
            return redirect('/login')
    return render_template('login.html')


@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/login')


app.run(debug=True)
