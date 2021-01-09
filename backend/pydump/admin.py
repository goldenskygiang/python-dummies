from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Lesson)
admin.site.register(Quiz)
admin.site.register(Problem)
admin.site.register(Question)
admin.site.register(Choice)
admin.site.register(QuizHighScore)
admin.site.register(Comment)