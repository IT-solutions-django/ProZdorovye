# Generated by Django 5.1.2 on 2024-10-23 16:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0012_alter_speciality_is_displayed'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='speciality',
            options={'ordering': ['pk'], 'verbose_name': 'Специализация', 'verbose_name_plural': 'Специализации'},
        ),
    ]