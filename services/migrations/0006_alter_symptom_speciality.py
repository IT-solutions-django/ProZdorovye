# Generated by Django 5.1.2 on 2024-10-15 08:20

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0005_remove_speciality_symptoms_symptom_speciality'),
    ]

    operations = [
        migrations.AlterField(
            model_name='symptom',
            name='speciality',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='symptoms', to='services.speciality', verbose_name='Специализация'),
        ),
    ]
