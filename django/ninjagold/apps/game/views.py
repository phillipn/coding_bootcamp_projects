from django.shortcuts import render, redirect

import random

def gold_check(request, setting):
    if setting == 'farm':
        gold = random.randrange(10,21)
        request.session['gold'] += gold
        request.session['activities'].append('Earned {} gold from the farm'.format(gold))
    elif setting == 'house':
        gold = random.randrange(2,6)
        request.session['gold'] += gold
        request.session['activities'].append('Earned {} gold from the house'.format(gold))
    elif setting == 'cave':
        gold = random.randrange(5,11)
        request.session['gold'] += gold
        request.session['activities'].append('Earned {} gold from the cave'.format(gold))
    elif setting == 'casino':
        if request.session['gold'] < 0:
            request.session['activities'].append('It takes money to make money')
            return redirect(index)
        gold = random.randrange(-50,51)
        request.session['gold'] += gold
        if gold < 0:
            request.session['activities'].append('Lost {} gold from the casino'.format(abs(gold)))
        else:
            request.session['activities'].append('Earned {} gold from the casino'.format(gold))

def index(request):
    return render(request, 'game/index.html')

def process_money(request, setting):
    if request.method == 'POST':
        if 'gold' not in request.session:
            request.session['gold'] = 0
        if 'activities' not in request.session:
            request.session['activities'] = []

        gold_check(request, setting.lower())
        return redirect(index)
