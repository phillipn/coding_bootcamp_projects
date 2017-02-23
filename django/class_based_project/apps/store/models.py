from __future__ import unicode_literals
from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator, MinLengthValidator

class Product(models.Model):
    manufacturer = models.CharField(blank=False, max_length=255)
    name = models.CharField(blank=False, max_length=255, validators=[MinLengthValidator(8)])
    price = models.IntegerField(blank=False, validators=[MinValueValidator(0)])
    description = models.TextField(blank=False, max_length=50)
    created_at = models.DateField(auto_now_add=True)
