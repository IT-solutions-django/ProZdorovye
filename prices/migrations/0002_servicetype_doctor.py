# Generated by Django 5.1.2 on 2024-10-16 08:30

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('doctors', '0015_alter_doctor_branch_remove_speciality_photos_and_more'),
        ('prices', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='servicetype',
            name='doctor',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='services', to='doctors.doctor', verbose_name='Врач'),
        ),
    ]
