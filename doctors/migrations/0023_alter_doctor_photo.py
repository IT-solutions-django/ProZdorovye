# Generated by Django 5.1.2 on 2024-11-01 08:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('doctors', '0022_alter_doctor_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctor',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='doctors', verbose_name='Фото'),
        ),
    ]
