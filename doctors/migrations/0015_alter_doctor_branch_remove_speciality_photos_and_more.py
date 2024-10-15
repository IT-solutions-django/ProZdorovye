# Generated by Django 5.1.2 on 2024-10-15 07:34

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('doctors', '0014_speciality_slug'),
        ('landing', '0013_branch_delete_article_delete_articlephoto'),
        ('services', '0003_specialityphoto_speciality_delete_servicetype'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctor',
            name='branch',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='landing.branch', verbose_name='Филиал'),
        ),
        migrations.RemoveField(
            model_name='speciality',
            name='photos',
        ),
        migrations.AlterField(
            model_name='doctor',
            name='specialities',
            field=models.ManyToManyField(related_name='doctors', to='services.speciality', verbose_name='Специализации'),
        ),
        migrations.DeleteModel(
            name='Branch',
        ),
        migrations.DeleteModel(
            name='Speciality',
        ),
        migrations.DeleteModel(
            name='SpecialityPhoto',
        ),
    ]
