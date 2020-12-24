from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Lesson)
admin.site.register(Quiz)
admin.site.register(Problem)
admin.site.register(Discussion)
admin.site.register(Post)
admin.site.register(Question)
admin.site.register(Choice)