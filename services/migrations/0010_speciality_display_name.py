# Generated by Django 5.1.2 on 2024-10-22 05:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0009_profession'),
    ]

    operations = [
        migrations.AddField(
            model_name='speciality',
            name='display_name',
            field=models.TextField(default='', verbose_name='Название для отображения'),
            preserve_default=False,
        ),
    ]