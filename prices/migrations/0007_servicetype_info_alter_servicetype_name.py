# Generated by Django 5.1.2 on 2024-11-02 03:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prices', '0006_remove_servicetype_duration_alter_servicetype_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='servicetype',
            name='info',
            field=models.CharField(default='', max_length=200, verbose_name='Дополнительная информация'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='servicetype',
            name='name',
            field=models.CharField(max_length=200, verbose_name='Название'),
        ),
    ]
