# Generated by Django 5.1.2 on 2024-10-11 08:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0010_delete_review_alter_photo_options'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Photo',
            new_name='ArticlePhoto',
        ),
        migrations.AlterModelOptions(
            name='articlephoto',
            options={'verbose_name': 'Фото для статьи', 'verbose_name_plural': 'Фото для статей'},
        ),
    ]
