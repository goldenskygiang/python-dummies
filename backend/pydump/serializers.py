from rest_framework import serializers
from .models import Lesson, Quiz, Problem, Discussion

class LessonSerializer(serializers.ModelSerializer):
  class Meta:
    model = Lesson
    fields = ('id', 'title', 'embed_url', 'description')
    
class QuizSerializer(serializers.ModelSerializer):
  class Meta:
    model = Quiz
    fields = ('id', 'lesson', 'img', 'title')

class ProblemSerializer(serializers.ModelSerializer):
  class Meta:
    model = Problem
    fields = ('id', 'lesson', 'title', 'link', 'description')

class DiscussionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Discussion
    fields = ('id', 'title', 'author')