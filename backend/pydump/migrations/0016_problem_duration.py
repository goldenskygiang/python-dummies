# Generated by Django 3.1.4 on 2021-01-11 16:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pydump', '0015_auto_20210111_2147'),
    ]

    operations = [
        migrations.AddField(
            model_name='problem',
            name='duration',
            field=models.TextField(default='1'),
        ),
    ]
