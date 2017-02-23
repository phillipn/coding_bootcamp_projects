from flask import Flask, render_template, request, redirect, flash
from mysqlconnection import MySQLConnector

import re

app = Flask(__name__)
app.secret_key ='082b82c6e8fcfba13ac0abebcd391a5e'

mysql = MySQLConnector(app, 'Email_Validator')

def valid_email(email):
    regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
    if not re.match(regex, email):
        return False
    else:
        return True

@app.route('/', methods=('GET', 'POST'))
def index():
    if request.method == 'POST':
        email = request.form['email']
        if not valid_email(email):
            flash("Valid email address needed", "error")
            return redirect('/')
        query = "INSERT INTO emails(email_address, created_at, updated_at) VALUES (:email, now(), now())"
        data = {'email': email}
        mysql.query_db(query, data)
        flash('Email added', "success")
        return redirect('/')
    emails = mysql.query_db("SELECT * FROM emails")
    return render_template('index.html', emails=emails)

app.run(debug=True)
