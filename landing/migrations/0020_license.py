# Generated by Django 5.1.2 on 2024-11-17 10:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0019_useragreementpdf'),
    ]

    operations = [
        migrations.CreateModel(
            name='License',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('page', models.FileField(upload_to='', verbose_name='Страница')),
            ],
            options={
                'verbose_name': 'Лицензия',
                'verbose_name_plural': 'Лицензия',
            },
        ),
    ]
