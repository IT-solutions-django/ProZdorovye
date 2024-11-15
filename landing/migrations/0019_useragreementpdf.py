# Generated by Django 5.1.2 on 2024-11-15 08:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0018_remove_question_is_open_remove_request_is_open_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserAgreementPDF',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to='prices', verbose_name='Файл')),
            ],
            options={
                'verbose_name': 'Пользовательское соглашение',
                'verbose_name_plural': 'Пользовательское соглашение',
            },
        ),
    ]