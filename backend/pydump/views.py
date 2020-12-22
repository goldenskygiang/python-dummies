from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import LessonSerializer      # add this
from .models import Lesson                     # add this

class LessonView(viewsets.ModelViewSet):       # add this
    serializer_class = LessonSerializer          # add this
    queryset = Lesson.objects.all()              # add this