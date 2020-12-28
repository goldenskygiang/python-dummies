from django.contrib.auth.models import User
from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email')

class LessonSerializer(serializers.ModelSerializer):
  class Meta:
    model = Lesson
    fields = ('id', 'title', 'embed_url', 'description')

class ChoiceSerializer(serializers.ModelSerializer):
  class Meta:
    model = Choice
    fields = ('choice_text', 'choice_img', 'is_correct')

class QuestionSerializer(serializers.ModelSerializer):
  choice_set = ChoiceSerializer(read_only=True, many=True)
  class Meta:
    model = Question
    fields = ('id', 'question_text', 'img', 'code', 'choice_set')

class QuizListSerializer(serializers.ModelSerializer):
  class Meta:
    model = Quiz
    fields = ('id', 'lesson', 'img', 'title', 'description')

class QuizDetailSerializer(serializers.ModelSerializer):
  question_set = QuestionSerializer(source='get_questions', read_only=True, many=True)
  class Meta:
    model = Quiz
    fields = ('id', 'lesson', 'img', 'title', 'description', 'question_set')

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