from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets, mixins, generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView, Response
from .serializers import *
from .models import *
from django.forms import Form
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer

class RegisterView(mixins.CreateModelMixin, viewsets.GenericViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def post(self, request, *arg, **kwarg):
        data = JSONParser().parse(request)
        serializer = UserSerializer(data=data)
        serializer.save()
        return Response(serializer.data)

class SubmitScoreView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        u = request.user.id
        quiz = Quiz.objects.get(pk=int(request.data["quiz_id"]))
        score = int(request.data["score"])

        try:
            hs = QuizHighScore.objects.get(user=u, quiz=quiz)
            if (hs.score < score):
                hs.score = score
                hs.save()
        except QuizHighScore.DoesNotExist:
            hs = QuizHighScore()
            hs.user = u
            hs.quiz = quiz
            hs.score = score
            hs.save()
        finally:
            return Response(QuizHighScoreSerializer(hs).data)

    def get(self, request):
        u = User.objects.get(pk=int(request.user.id))
        quiz = Quiz.objects.get(pk=int(request.GET.get("quiz_id")))

        hs, created = QuizHighScore.objects.get_or_create(user=u, quiz=quiz, defaults = {'score': 0})

        return Response(QuizHighScoreSerializer(hs).data)

class UserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        u = User.objects.get(pk=int(request.user.id))
        username = u.username
        score = 0

        for q in u.quizhighscore_set.all():
            score += q.score

        data = {
            "username": username,
            "score": score
        }

        return Response(data)

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
    queryset = Problem.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return ProblemListSerializer
        if self.action == 'retrieve':
            return ProblemDetailSerializer
        return ProblemListSerializer

class DiscussionsView(viewsets.ModelViewSet):
    serializer_class = DiscussionSerializer
    queryset = Discussion.objects.all()