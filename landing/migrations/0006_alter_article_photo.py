# Generated by Django 5.1.2 on 2024-10-09 16:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0005_rename_opened_request_is_open'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='photo',
            field=models.FileField(blank=True, null=True, upload_to='articles', verbose_name='Фотография'),
        ),
    ]