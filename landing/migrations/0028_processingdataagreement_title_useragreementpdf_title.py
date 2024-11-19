# Generated by Django 5.1.2 on 2024-11-19 04:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0027_processingdataagreement'),
    ]

    operations = [
        migrations.AddField(
            model_name='processingdataagreement',
            name='title',
            field=models.TextField(default='Согласие на обработку персональных данных', help_text='Название вкладки в админ. панели', verbose_name='Согласие на обработку персональных данных'),
        ),
        migrations.AddField(
            model_name='useragreementpdf',
            name='title',
            field=models.TextField(default='Пользовательское соглашение', help_text='Название вкладки в админ. панели', verbose_name='Пользовательское соглашение'),
        ),
    ]
