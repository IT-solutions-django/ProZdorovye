# Generated by Django 5.1.2 on 2024-10-09 16:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0004_request'),
    ]

    operations = [
        migrations.RenameField(
            model_name='request',
            old_name='opened',
            new_name='is_open',
        ),
    ]
