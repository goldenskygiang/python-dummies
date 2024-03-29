# Generated by Django 3.1.4 on 2021-01-03 17:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pydump', '0008_auto_20201228_2232'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='problem',
            name='link',
        ),
        migrations.AddField(
            model_name='problem',
            name='input_guide',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='problem',
            name='output_guide',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='problem',
            name='sample_input',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='problem',
            name='sample_output',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='problem',
            name='description',
            field=models.TextField(),
        ),
    ]
