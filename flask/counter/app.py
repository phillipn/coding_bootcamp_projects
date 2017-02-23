from flask import Flask, render_template, session, redirect

app = Flask(__name__)
app.secret_key = 'Secret'

@app.route('/')
def index():
    try:
        session['count'] += 1
    except KeyError:
        session['count'] = 1
    return render_template('index.html')

@app.route('/add_two')
def add_two():
    try:
        session['count'] += 1
    except KeyError:
        session['count'] = 1
    return redirect('/')

@app.route('/reset')
def reset():
    session['count'] = 0
    return redirect('/')

app.run(debug=True)
