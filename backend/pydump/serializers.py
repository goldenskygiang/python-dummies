from rest_framework import serializers
from .models import *

class LessonSerializer(serializers.ModelSerializer):
  class Meta:
    model = Lesson
    fields = ('id', 'title', 'embed_url', 'description')
    
class QuizSerializer(serializers.ModelSerializer):
  class Meta:
    model = Quiz
    fields = ('id', 'lesson', 'img', 'title', 'question_set')

class QuestionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Question
    fields = ('id', 'question_text', 'img', 'choice_set')

class ChoiceSerializer(serializers.ModelSerializer):
  class Meta:
    model = Choice
    fields = ('choice_text', 'choice_img')

class ProblemSerializer(serializers.ModelSerializer):
  class Meta:
    model = Problem
    fields = ('id', 'lesson', 'title', 'link', 'description')

class DiscussionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Discussion
    fields = ('id', 'title', 'author', 'post_set')

class ProblemSerializer(serializers.ModelSerializer):
  class Meta:
    model = Problem
    fields = ('id', 'lesson', 'title', 'link', 'description', 'submission_set')