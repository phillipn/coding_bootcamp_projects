from django.shortcuts import render, redirect
from django.contrib import messages

from .models import User
from .forms import RegisterForm

def form(request):
    register_form  = RegisterForm()
    return render(request, 'login/form.html', {'register_form': register_form})

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
        register_form = RegisterForm(request.POST)
        if register_form.is_valid():
            User.objects.register(request.POST)
            messages.success(request, 'Welcome to the club, {}!'.format(request.POST['first_name']))
        else:
            return render(request, 'login/form.html', {'register_form': register_form})
    return redirect('login:form')
