# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-24 16:05
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_auto_20170124_1458'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='user_to',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='to_user', to='users.User'),
        ),
    ]