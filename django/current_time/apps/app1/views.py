from django.shortcuts import render
import datetime

def index(request):
    time = datetime.datetime.now()
    return render(request, 'app1/index.html', {'time': time})
