# Generated by Django 5.1.2 on 2024-11-18 12:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0022_alter_licensepage_options_alter_licensepage_file'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContactInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.TextField(verbose_name='Почтовый адрес')),
                ('personal_questions_info', models.TextField(verbose_name='Приём граждан по личным вопросам')),
                ('title', models.TextField(default='Контактная информация', help_text='Название вкладки в админ. панели', verbose_name='Контактная информация')),
            ],
        ),
    ]
