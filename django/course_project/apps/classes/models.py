from __future__ import unicode_literals

from django.db import models

class Course(models.Model):
    name = models.CharField(blank=False, max_length=255)
    description = models.TextField(blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
       ordering = ('-created_at',)

class Comment(models.Model):
    course = models.ForeignKey(Course)
    comment = models.TextField(blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
       ordering = ('-created_at',)
