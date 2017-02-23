from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse

def index(request):
    return render(request, 'form/index.html')

def create(request):
    if request.method == 'POST':
        request.session['user'] = request.POST
        return HttpResponseRedirect(reverse("survey:results"))

def results(request):
    return render(request, 'form/results.html')
