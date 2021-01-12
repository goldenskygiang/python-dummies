# Generated by Django 3.1.4 on 2021-01-12 09:59

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('pydump', '0023_auto_20210112_0041'),
    ]

    operations = [
        migrations.CreateModel(
            name='CodeHighScore',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.FloatField()),
                ('problem', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pydump.problem')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('user', 'problem')},
            },
        ),
    ]