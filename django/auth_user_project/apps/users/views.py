from django.shortcuts import render, redirect
from .forms import UserCreateForm
from django.contrib import messages
from django.contrib.auth.models import User
from .models import UserProfile
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required


def register(request):
    form = UserCreateForm()
    if request.method == 'POST':
        form = UserCreateForm(request.POST)
        if form.is_valid():
            user = form.save()
            UserProfile.objects.create(user=user, dob=request.POST['dob'], admin_level=request.POST['admin_level'])
            messages.success(request, 'User created')

            login(request, user)
            return redirect('users:index')
    return render(request, 'users/register.html', {'form':form})

@login_required(login_url='/')
def index(request):
    return render(request, 'users/index.html')

def logout_user(request):
    logout(request)
    print request.user
    return redirect('users:register')
