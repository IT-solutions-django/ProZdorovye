# Generated by Django 5.1.2 on 2024-10-15 08:14

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0004_symptom_speciality_intro_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='speciality',
            name='symptoms',
        ),
        migrations.AddField(
            model_name='symptom',
            name='speciality',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='symptopms', to='services.speciality', verbose_name='Специализация'),
            preserve_default=False,
        ),
    ]
