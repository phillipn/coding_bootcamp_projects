# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-21 23:21
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0003_remove_user_course'),
        ('classes', '0004_auto_20170120_2151'),
    ]

    operations = [
        migrations.CreateModel(
            name='CourseStudents',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='classes.Course')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='login.User')),
            ],
        ),
    ]
