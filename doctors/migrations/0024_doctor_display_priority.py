# Generated by Django 5.1.2 on 2024-11-12 07:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('doctors', '0023_alter_doctor_photo'),
    ]

    operations = [
        migrations.AddField(
            model_name='doctor',
            name='display_priority',
            field=models.IntegerField(default=1, verbose_name='Приоритет показа'),
            preserve_default=False,
        ),
    ]
