from flask import Flask, render_template, redirect, flash, url_for, session, request

import re

app = Flask(__name__)
app.secret_key = '493643459d2549d00f59196e000a2ded'

def blank_check(email, first_name, last_name, password, password_confirm):
    if not email or not first_name or not last_name or not password or not password_confirm:
        flash("All fields need to be filled in")

def no_number_check(first_name, last_name):
    regex = re.compile(r'^[a-zA-Z]+$')
    if not re.match(regex, first_name):
        flash("First Name shouldn't have numbers")
    else:
        session['first_name'] = first_name

    if not re.match(regex, last_name):
        flash("Last Name shouldn't have numbers")
    else:
        session['last_name'] = last_name

def password_check(password, n):
    if len(password) < n:
        flash('Password needs to be at least ' + str(n) + ' characters')
    regex = re.compile(r'^(?=.*[a-z])(?=.*[A-Z])$')
    if not re.match(regex, password):
        flash("Password needs one upper case and one lower case letter")

def email_format_check(email):
    regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
    if not re.match(regex, email):
        flash("Valid email address needed")
    else:
        session['email'] = email

def check_match(password, password_confirm):
    if password != password_confirm:
        flash('Passwords need to match')

@app.route('/', methods=("GET", "POST"))
def index():
    if request.method == 'POST':
        session.clear()

        #STORE FORM INPUTS
        email = request.form['email']
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        password = request.form['password']
        password_confirm = request.form['password_confirm']

        #VALIDATIONS
        blank_check(email, first_name, last_name, password, password_confirm)
        email_format_check(email)
        no_number_check(first_name, last_name)
        password_check(password, 8)
        check_match(password, password_confirm)

        return redirect('/')
    return render_template('index.html')

app.run(debug=True)
