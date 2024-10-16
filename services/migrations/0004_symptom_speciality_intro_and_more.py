# Generated by Django 5.1.2 on 2024-10-15 08:09

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0003_specialityphoto_speciality_delete_servicetype'),
    ]

    operations = [
        migrations.CreateModel(
            name='Symptom',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(max_length=500, verbose_name='Текст')),
            ],
            options={
                'verbose_name': 'Симптом',
                'verbose_name_plural': 'Симптомы',
            },
        ),
        migrations.AddField(
            model_name='speciality',
            name='intro',
            field=models.CharField(default='lorem ipsum', max_length=150, verbose_name='Очень короткое описание'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='speciality',
            name='short_description',
            field=models.CharField(default='lorem ipsum', max_length=500, verbose_name='Короткое описание'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='speciality',
            name='symptoms',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='services.symptom', verbose_name='Симптомы'),
        ),
    ]
