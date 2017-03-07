from __future__ import unicode_literals

from django.db import models

class Note(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(default='')