# Generated by Django 5.1.2 on 2024-10-09 15:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('doctors', '0007_alter_speciality_options_speciality_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='speciality',
            name='icon',
            field=models.ImageField(null=True, upload_to='specialities', verbose_name='Иконка'),
        ),
    ]
