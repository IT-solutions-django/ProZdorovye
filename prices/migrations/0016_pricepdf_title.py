# Generated by Django 5.1.2 on 2024-11-21 03:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prices', '0015_alter_servicetype_options'),
    ]

    operations = [
        migrations.AddField(
            model_name='pricepdf',
            name='title',
            field=models.TextField(default='Прайс-лист', help_text='Название вкладки в админ. панели', verbose_name='Прайс-лист'),
        ),
    ]
