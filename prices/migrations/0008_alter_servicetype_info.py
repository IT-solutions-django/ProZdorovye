# Generated by Django 5.1.2 on 2024-11-02 03:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prices', '0007_servicetype_info_alter_servicetype_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='servicetype',
            name='info',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Дополнительная информация'),
        ),
    ]
