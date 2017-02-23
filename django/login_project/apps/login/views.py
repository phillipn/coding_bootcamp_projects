from django.shortcuts import render, redirect
from django.contrib import messages

from .models import User

def form(request):
    return render(request, 'login/form.html')

def login(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        response = User.objects.login(email=email, password=password)

        if 'login_errors' in response:
            messages.error(request, response['login_errors'], extra_tags='login_error')
        elif 'success' in response:
            request.session['user'] = response['success']
            messages.success(request, 'You have been logged in')

    return redirect('login:form')

def register(request):
    if request.method == 'POST':
        response = User.objects.register(request.POST)
        if 'registration_errors' in response:
            for error in response['registration_errors']:
                messages.error(request, error, extra_tags='register_error')
        elif 'success' in response:
            request.session['user'] = response['success']
            messages.success(request, 'Welcome to the club, {}!'.format(response['success']['first_name']))
    return redirect('login:form')
