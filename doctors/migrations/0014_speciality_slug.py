# Generated by Django 5.1.2 on 2024-10-14 05:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('doctors', '0013_delete_servicetype'),
    ]

    operations = [
        migrations.AddField(
            model_name='speciality',
            name='slug',
            field=models.SlugField(default='sample', verbose_name='Слаг'),
            preserve_default=False,
        ),
    ]
