from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.exceptions import ValidationError
from django.core.validators import validate_email

from .models import Email

def form(request):
    if request.method == 'POST':
        email = request.POST['email']
        try:
            validate_email(email)
        except ValidationError:
            messages.error(request, '{} is not a valid email address'.format(email))
            return redirect('registration:form')
        else:
            Email.objects.create(email=email)
            messages.success(request, '{} is a valid email address'.format(email))
            return redirect('registration:index')
    return render(request, 'registration/form.html')

def index(request):
    emails = Email.objects.all()
    return render(request, 'registration/index.html', {'emails': emails})

def delete(request, id):
    Email.objects.get(id=id).delete()
    messages.success(request, 'Email has been deleted')
    return redirect('registration:index')
