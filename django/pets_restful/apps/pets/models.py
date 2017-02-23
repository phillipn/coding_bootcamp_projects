from __future__ import unicode_literals

from django.db import models

class Pet(models.Model):
    name = models.CharField(blank=False, max_length=255)
    description = models.TextField(blank=False)
    price = models.IntegerField(blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
