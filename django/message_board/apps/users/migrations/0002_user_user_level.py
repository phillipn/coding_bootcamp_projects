# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-22 22:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='user_level',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
    ]
