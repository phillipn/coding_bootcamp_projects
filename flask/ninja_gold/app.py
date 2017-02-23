from flask import Flask, render_template, session, redirect, request

import random
import datetime

app = Flask(__name__)
app.secret_key = 'secretNinjaGOld'

def gold_check(setting):
    date = str(datetime.datetime.now().strftime("%Y/%m/%d %I:%M %p"))
    if setting == 'farm':
        gold = random.randrange(10, 21)
        session['gold'] += gold
        session['activities'].append('Earned ' + str(gold) + ' from the farm. ' + date)
    elif setting == 'cave':
        gold = random.randrange(5, 11)
        session['gold'] += gold
        session['activities'].append('Earned ' + str(gold) + ' from the cave. ' + date)
    elif setting == 'house':
        gold = random.randrange(2, 6)
        session['gold'] += gold
        session['activities'].append('Earned ' + str(gold) + ' from the house. ' + date)
    elif setting == 'casino':
        take = random.choice([True, False])
        gold = random.randrange(0, 51)
        if take:
            session['gold'] -= gold
            session['activities'].append('Entered a casino and lost ' + str(gold) + '. ' + date)
        else:
            session['gold'] += gold
            session['activities'].append('Earned ' + str(gold) + ' from the casino. ' + date)

@app.route('/')
def index():
    if 'gold' not in session:
        session['gold'] = 0
    if 'activities' not in session:
        session['activities'] = []

    return render_template('index.html')

@app.route('/process_money', methods=['POST'])
def process_money():
    setting = request.form["building"]
    gold_check(setting)
    return redirect('/')
app.run(debug=True)
