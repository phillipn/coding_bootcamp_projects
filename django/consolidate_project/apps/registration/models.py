from __future__ import unicode_literals

from django.db import models

class Email(models.Model):
    email = models.EmailField(blank=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
       ordering = ('-created_at',)
