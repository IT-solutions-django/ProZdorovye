# Generated by Django 5.1.2 on 2024-10-09 08:00

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Branch',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Название')),
                ('address', models.CharField(max_length=100, verbose_name='Адрес')),
                ('phone', models.CharField(max_length=17, verbose_name='Номер телефона')),
            ],
            options={
                'verbose_name': 'Филиал',
                'verbose_name_plural': 'Филиалы',
            },
        ),
        migrations.CreateModel(
            name='Speciality',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=80, verbose_name='Название')),
            ],
            options={
                'verbose_name': 'Специализация',
                'verbose_name_plural': 'Специализации',
            },
        ),
        migrations.CreateModel(
            name='ServiceType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Название')),
                ('price', models.DecimalField(decimal_places=2, max_digits=8, verbose_name='Цена')),
                ('speciality', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='doctors.speciality', verbose_name='Специализация')),
            ],
            options={
                'verbose_name': 'Тип услуги',
                'verbose_name_plural': 'Типы услуг',
            },
        ),
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50, verbose_name='Имя')),
                ('last_name', models.CharField(max_length=50, verbose_name='Фамилия')),
                ('patronymic', models.CharField(blank=True, max_length=50, null=True, verbose_name='Отчество')),
                ('phone', models.CharField(max_length=20, unique=True, verbose_name='Телефон')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='Электронная почта')),
                ('hire_year', models.SmallIntegerField(verbose_name='Год начала работы')),
                ('experience', models.SmallIntegerField(null=True, verbose_name='Стаж')),
                ('description', models.TextField(verbose_name='Описание')),
                ('photo', models.ImageField(null=True, upload_to='doctors', verbose_name='Фото')),
                ('branch', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='doctors.branch', verbose_name='Филиал')),
                ('speciality', models.ManyToManyField(related_name='doctors', to='doctors.speciality', verbose_name='Специализации')),
            ],
            options={
                'verbose_name': 'Врач',
                'verbose_name_plural': 'Врачи',
            },
        ),
    ]
