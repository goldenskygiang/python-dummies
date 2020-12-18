from django.contrib import admin
from .models import Profile, Lesson, Problem, Quiz, Question, Choice

# Register your models here.
admin.site.register(Lesson)
admin.site.register(Quiz)
admin.site.register(Problem)
admin.site.register(Question)
admin.site.register(Choice)