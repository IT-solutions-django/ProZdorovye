# Generated by Django 5.1.2 on 2024-10-15 08:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0002_article_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='photos',
        ),
        migrations.DeleteModel(
            name='ArticlePhoto',
        ),
    ]