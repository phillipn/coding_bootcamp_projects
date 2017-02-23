from flask import (Flask, render_template, flash, redirect, url_for, session)

import forms

app = Flask(__name__)
app.secret_key = 'auoesh.bouoastuh.43,uoausoehuosth3ououea.auoub!'


@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/', methods=('GET', 'POST'))
def survey():
    form = forms.SurveyForm()
    if form.validate_on_submit():
        name = form.name.data
        location = form.location.data
        language = form.language.data
        flash('A boy named {}, going to a bootcamp in {}! Ha! Your favorite language is probably {}.'.format(name, location, language))
        return redirect(url_for('profile'))
    return render_template('survey.html', form=form)

app.run(debug=True)
