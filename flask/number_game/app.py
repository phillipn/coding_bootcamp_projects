from flask import Flask, render_template, request, redirect, session

import random

app = Flask(__name__)
app.secret_key = 'secret'

@app.route('/')
def index():
    if 'rand_num' not in session:
        rand_num = random.randrange(0, 101)
        session['rand_num'] = rand_num
    return render_template('index.html')

@app.route('/guess', methods=['POST'])
def check_guess():
    session['result'] = ''

    try:
        number = int(request.form['guess'])
    except:
        session['result'] = 'Error'
        return redirect('/')

    if number > int(session['rand_num']):
        session['result'] = 'High'
    elif number < int(session['rand_num']):
        session['result'] = 'Low'
    else:
        session['result'] = 'Correct'
    return redirect('/')

@app.route('/new')
def new_game():
    session.pop('rand_num')
    session.pop('result')
    return redirect('/')

app.run(debug=True)
