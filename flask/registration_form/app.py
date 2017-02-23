from flask import Flask, render_template, redirect, flash, url_for, session

import forms

app = Flask(__name__)
app.secret_key = '493643459d2549d00f59196e000a2ded'

@app.route('/', methods=("GET", "POST"))
def index():
    form = forms.RegistrationForm()
    if form.validate_on_submit():
        flash("Thanks for submitting your information.")
        return redirect(url_for("index"))
    return render_template('index.html', form=form)

app.run(debug=True)
