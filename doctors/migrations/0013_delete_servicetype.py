# Generated by Django 5.1.2 on 2024-10-14 03:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('doctors', '0012_specialityphoto_speciality_photos'),
    ]

    operations = [
        migrations.DeleteModel(
            name='ServiceType',
        ),
    ]