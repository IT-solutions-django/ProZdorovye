# Generated by Django 5.1.2 on 2024-11-20 05:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('prices', '0014_servicetype_booking_link'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='servicetype',
            options={'ordering': ['pk'], 'verbose_name': 'Тип услуги', 'verbose_name_plural': 'Типы услуг'},
        ),
    ]
