# Generated by Django 5.1.2 on 2024-10-09 15:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('doctors', '0008_speciality_icon'),
    ]

    operations = [
        migrations.AlterField(
            model_name='speciality',
            name='icon',
            field=models.FileField(null=True, upload_to='specialities', verbose_name='Иконка'),
        ),
    ]