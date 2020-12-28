from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets, mixins, generics
from rest_framework.views import APIView, Response
from .serializers import *
from .models import *
from django.forms import Form
from rest_framework.parsers import JSONParser

class RegisterView(mixins.CreateModelMixin, viewsets.GenericViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def post(self, request, *arg, **kwarg):
        data = JSONParser().parse(request)
        serializer = UserSerializer(data=data)
        serializer.save()
        return Response(serializer.data)

class LessonView(viewsets.ModelViewSet):
    serializer_class = LessonSerializer
    queryset = Lesson.objects.all()

class QuizView(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return QuizListSerializer
        if self.action == 'retrieve':
            return QuizDetailSerializer
        return QuizListSerializer

class ProblemsView(viewsets.ModelViewSet):
    serializer_class = ProblemSerializer
    queryset = Problem.objects.all()

class DiscussionsView(viewsets.ModelViewSet):
    serializer_class = DiscussionSerializer
    queryset = Discussion.objects.all()