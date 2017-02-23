from __future__ import unicode_literals
from django.core.exceptions import ObjectDoesNotExist
from django.forms.models import model_to_dict
from django.contrib.auth.hashers import make_password, check_password
from django.core.exceptions import ValidationError
import re
import datetime
import bcrypt

from django.db import models

class UserManager(models.Manager):
    def login(self, email, password):
        try:
            user = User.objects.get(email=email)
        except ObjectDoesNotExist:
            return {'login_errors': 'Login failed'}
        else:
            if check_password(password, user.password_hash):
                model_to_dict(user)
                return {'success': {'first_name': user.first_name, 'id': user.id}}
            else:
                return {'login_errors': 'Login failed'}

    def register(self, data_object):
        first_name = data_object['first_name']
        last_name = data_object['last_name']
        email = data_object['email']
        password = data_object['password']
        password_confirm = data_object['password_confirm']
        hashed_password = make_password(password)
        user = User.objects.create(
                    first_name=first_name,
                    last_name=last_name,
                    email=email,
                    password_hash= hashed_password
                )
        return {'success': {'first_name': user.first_name, 'id': user.id}}

def valid_name(value):
    if len(value)<3 or not value.isalpha():
        raise ValidationError('Name must be longer than: 3 and all letters')

def valid_email(value):
    if not re.match(r'\b[\w.-]+@[\w.-]+.\w{2,4}\b', value):
        raise ValidationError('Email must be a valid address')

class User(models.Model):
    first_name = models.CharField(max_length=45,validators=[valid_name])
    last_name = models.CharField(max_length=45,validators=[valid_name])
    email = models.EmailField(validators=[valid_email], unique=True)
    password_hash = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()
