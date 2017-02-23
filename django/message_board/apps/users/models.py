from __future__ import unicode_literals
from django.core.exceptions import ObjectDoesNotExist
from django.forms.models import model_to_dict
from django.contrib.auth.hashers import make_password, check_password

import re
import datetime

from django.db import models

class UserManager(models.Manager):
    def login(self, data_object):
        email = data_object['email']
        password = data_object['password']

        try:
            user = User.objects.get(email=email)
        except ObjectDoesNotExist:
            return {'login_errors': 'Login failed'}
        else:
            if check_password(password, user.password_hash):
                model_to_dict(user)
                return {'success': {'first_name': user.first_name, 'id': user.id, 'user_level': user.user_level}}
            else:
                return {'login_errors': 'Login failed'}

    def update_user(self, data_object, user):
        errors = []
        first_name = data_object['first_name']
        last_name = data_object['last_name']
        email = data_object['email']
        user_level = data_object['user_level']

        if not self.valid_name(first_name):
            errors.append('First name needs to be at least two characters, all letters')
        if not self.valid_name(last_name):
            errors.append('First name needs to be at least two characters, all letters')
        if not self.valid_email(email):
            errors.append('Please enter a valid email')

        if errors:
            return {'errors': errors}

        user.first_name = first_name
        user.last_name = last_name
        user.email = email
        user.user_level = user_level

        user.save()
        return {'success': 'User information updated'}

    def update_description(self, data_object, user):
        errors = []
        description = data_object['description']

        if len(description)<1:
            errors.append('Enter something man!')

        if errors:
            return {'errors': errors}

        user.description = description
        user.save()
        return {'success': 'Description added'}

    def update_password(self, data_object, user):
        errors = []
        password = data_object['password']
        password_confirm = data_object['password_confirm']

        if not self.valid_password(password, password_confirm):
            errors.append('Password needs to be at least 8 characters and needs to match')

        if not password == password_confirm:
            errors.append('Passwords do not match')

        if errors:
            return {'errors': errors}

        hashed_pw = make_password(password)
        user.password_hash = hashed_pw
        user.save()
        return {'success': 'Password changed'}

    def register(self, data_object):
        errors = []

        first_name = data_object['first_name']
        last_name = data_object['last_name']
        email = data_object['email']
        password = data_object['password']
        password_confirm = data_object['password_confirm']

        try:
            user = User.objects.get(email=email)
        except ObjectDoesNotExist:
            user = None

        if User.objects.count() == 0:
            user_level = 'Admin'
        else:
            user_level = 'Normal'

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
                            user_level= user_level
                        )
                return {'success': {'first_name': user.first_name, 'id': user.id, 'user_level': user_level}}
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
    email = models.EmailField(max_length=255)
    password_hash = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user_level = models.CharField(max_length=255)
    description = models.TextField()

    objects = UserManager()

class Post(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    user_to = models.ForeignKey(User, on_delete = models.CASCADE, related_name='to_user')
    user_from = models.ForeignKey(User, on_delete = models.CASCADE, related_name='from_user')

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey(Post)
