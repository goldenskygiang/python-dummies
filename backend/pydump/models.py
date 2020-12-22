from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    college = models.CharField(max_length=200)

class Lesson(models.Model):
    title = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    embed_url = models.CharField(max_length=500)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.title

class Problem(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    link = models.CharField(max_length=100)
    description = models.CharField(max_length=500)

class Submission(models.Model):
    problem = models.ForeignKey(Problem, on_delete=models.CASCADE)
    score = models.FloatField()
    maxscore = models.FloatField()
    author = models.ForeignKey(Profile, on_delete=models.CASCADE)
    date = models.DateTimeField('date submitted')

class Quiz(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    img = models.ImageField()
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    img = models.ImageField()
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    choice_img = models.ImageField()
    is_correct = models.BooleanField()