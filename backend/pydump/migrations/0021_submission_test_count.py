# Generated by Django 3.1.4 on 2021-01-11 17:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pydump', '0020_auto_20210112_0007'),
    ]

    operations = [
        migrations.AddField(
            model_name='submission',
            name='test_count',
            field=models.IntegerField(default=10),
            preserve_default=False,
        ),
    ]
