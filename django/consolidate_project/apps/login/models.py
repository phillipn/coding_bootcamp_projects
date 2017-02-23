from __future__ import unicode_literals
from django.core.exceptions import ObjectDoesNotExist
from django.forms.models import model_to_dict
from django.contrib.auth.hashers import make_password, check_password

import re
import datetime

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
        errors = []

        first_name = data_object['first_name']
        last_name = data_object['last_name']
        email = data_object['email']
        password = data_object['password']
        password_confirm = data_object['password_confirm']
        birthday = datetime.datetime.now()

        try:
            user = User.objects.get(email=email)
        except ObjectDoesNotExist:
            user = None

        if not user:
            if not self.valid_name(first_name):
                errors.append('First name needs to be at least two characters, all letters')
            if not self.valid_name(last_name):
                errors.append('First name needs to be at least two characters, all letters')
            if not self.valid_email(email):
                errors.append('Please enter a valid email')
            if not self.valid_password(password, password_confirm):
                errors.append('Password needs to be at least 8 characters and needs to match')

            if not errors:
                hashed_password = make_password(password)
                user = User.objects.create(
                            first_name=first_name,
                            last_name=last_name,
                            email=email,
                            password_hash= hashed_password,
                            birthday=birthday
                        )
                return {'success': {'first_name': user.first_name, 'id': user.id}}

        else:
            errors.append('Email already exists')
        return {'registration_errors' : errors}

    def valid_name(self, name):
        if len(name)<3 or not name.isalpha():
            return False
        else:
            return True

    def valid_email(self, email):
        if re.match(r'\b[\w.-]+@[\w.-]+.\w{2,4}\b', email):
            return True
        else:
            return False

    def valid_password(self, password, password_confirm):
        if password != password_confirm or len(password)<8:
            return False
        else:
            return True

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    birthday = models.DateTimeField()
    email = models.EmailField(max_length=255)
    password_hash = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()
