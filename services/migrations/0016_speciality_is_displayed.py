# Generated by Django 5.1.2 on 2025-01-09 03:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0015_rename_is_displayed_speciality_is_displayed_on_homepage'),
    ]

    operations = [
        migrations.AddField(
            model_name='speciality',
            name='is_displayed',
            field=models.BooleanField(default=True, verbose_name='Отображается ли на сайте'),
        ),
    ]
