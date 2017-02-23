from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector

app = Flask(__name__)
mysql = MySQLConnector(app,'friendsdbase')

@app.route('/')
def index():
    query = "SELECT * FROM friends"
    friends = mysql.query_db(query)
    return render_template('index.html', friends=friends)

@app.route('/friends/<friend_id>')
def edit(friend_id):
    query = "SELECT * FROM friends WHERE id = :specific_id"
    data = {'specific_id': friend_id}
    friend = mysql.query_db(query, data)
    print friend
    return render_template('edit.html', friend=friend[0])

@app.route('/friends', methods=['POST'])
def create():
    query = "INSERT INTO friends (first_name, last_name, email, created_at, updated_at) \
             VALUES (:first_name, :last_name, :email, NOW(), NOW())"
    data = {
        'first_name': request.form['first_name'],
        'last_name':  request.form['last_name'],
        'email': request.form['email']
    }

    mysql.query_db(query, data)
    return redirect('/')

@app.route('/update_friend/<friend_id>', methods=['POST'])
def update(friend_id):
    query = "UPDATE friends \
             SET first_name = :first_name, last_name = :last_name, email = :email \
             WHERE id = :id"

    data = {
         'first_name': request.form['first_name'],
         'last_name':  request.form['last_name'],
         'email': request.form['email'],
         'id': friend_id
    }

    mysql.query_db(query, data)
    return redirect('/')

@app.route('/remove_friend/<friend_id>', methods=['POST'])
def delete(friend_id):
    query = "DELETE FROM friends WHERE id = :id"
    data = {'id': friend_id}
    mysql.query_db(query, data)
    return redirect('/')

app.run(debug=True)
