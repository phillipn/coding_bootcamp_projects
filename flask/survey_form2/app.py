from flask import (Flask, render_template, flash, redirect, url_for, request, session)

app = Flask(__name__)
app.secret_key = 'auoesh.bouoastuh.43,uoausoehuosth3ououea.auoub!'


@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/', methods=('GET', 'POST'))
def survey():
    if request.method == 'POST':
        name = request.form['name']
        flash('Hello ' + name)
        print session
        return redirect(url_for('profile'))
    return render_template('survey.html')

app.run(debug=True)
