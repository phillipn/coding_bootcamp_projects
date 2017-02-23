from django.shortcuts import render

import random
import string

def index(request):
    if 'counter' not in request.session:
        request.session['counter'] = 1
    else:
        request.session['counter'] += 1
        
    random_word = ''
    for _ in xrange(15):
        if random.random() < .25715:
            random_word += str(random.randrange(0, 10))
        else:
            random_word += random.choice(string.letters)
    return render(request, 'random_word_generator/index.html', {'random_word': random_word})
