# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-21 23:44
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0003_remove_user_course'),
        ('classes', '0005_coursestudents'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='coursestudents',
            unique_together=set([('user', 'course')]),
        ),
    ]