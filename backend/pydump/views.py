# Create your views here.
from django.shortcuts import render
from django.utils.text import slugify
from rest_framework import viewsets, mixins, generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView, Response
from .serializers import *
from .models import *
from django.forms import Form
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer

import sys
import subprocess

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

        hs, created = QuizHighScore.objects.get_or_create(user=u, quiz=quiz, defaults = {'score': -1})

        return Response(QuizHighScoreSerializer(hs).data)

class CommentView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        problem = Problem.objects.get(pk=int(request.GET.get("problem_id")))
        return Response(CommentSerializer(problem.comment_set.all(), many=True).data)

    def post(self, request):
        u = User.objects.get(pk=int(request.user.id))
        content = request.data["content"]

        if ("reply_to" in request.data):
            reply_to = Comment.objects.get(pk=int(request.data["reply_to"]))
            c = Comment(author=u, content=content, reply_to=reply_to)
            c.save()
        else:
            prob = Problem.objects.get(pk=int(request.data["problem_id"]))
            c = Comment(author=u, content=content, problem=prob)
            c.save()

        return Response(CommentSerializer(c).data)

class UserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        u = User.objects.get(pk=int(request.user.id))
        score = 0

        for q in u.quizhighscore_set.all():
            if (q.score == -1):
                continue
            score += q.score

        data = {
            "username": u.username,
            "email": u.email,
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

# class DiscussionsView(viewsets.ModelViewSet):
#     serializer_class = DiscussionSerializer
#     queryset = Discussion.objects.all()

def run_code(code, inp, ans, time):
    try:
        byteOutput = subprocess.check_output(['python', '-c', code], input=bytes(inp, "UTF8"), timeout=time)
        res = byteOutput.decode('UTF-8').rstrip()
        if ans == res:
            return 'CR'
        else:
            return 'WA'
    except subprocess.TimeoutExpired:
        return 'TLE'
    except subprocess.CalledProcessError:
        return 'RTE' 
    

class CheckProblemset(APIView):
    # permission_classes = [IsAuthenticated]
    def post(self, request, problemset_id):
        queryset = Problem.objects.all()

        test = ["5", "1", "2", "3", "4", "6", "10", "7", "8", "9"]
        answer = ["8", "1", "2", "3", "5", "13", "89", "21", "34", "55"]
        res = []
        duration = 1000
        code = request.data.get('code')
        amount_of_test = len(test)

        score = 0

        for i in range(amount_of_test):
            result = run_code(code, test[i], answer[i], duration)
            if result == 'CR':
                score += 10
            res.append(result)
        
        data: dict = {
            "score": score,
            "res": res,
            "amountOfTest": amount_of_test
        },

        return Response(data)