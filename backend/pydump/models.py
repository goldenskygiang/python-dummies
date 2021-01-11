from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    college = models.CharField(max_length=200)

class Lesson(models.Model):
    title = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published', auto_now_add=True)
    embed_url = models.CharField(max_length=500)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.title

class Problem(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    input_guide = models.TextField()
    output_guide = models.TextField()
    sample_input = models.TextField()
    sample_output = models.TextField()
    input_0 = models.TextField(default="")
    input_1 = models.TextField(default="")
    input_2 = models.TextField(default="")
    input_3 = models.TextField(default="")
    input_4 = models.TextField(default="")
    input_5 = models.TextField(default="")
    input_6 = models.TextField(default="")
    input_7 = models.TextField(default="")
    input_8 = models.TextField(default="")
    input_9 = models.TextField(default="")
    output_0 = models.TextField(default="")
    output_1 = models.TextField(default="")
    output_2 = models.TextField(default="")
    output_3 = models.TextField(default="")
    output_4 = models.TextField(default="")
    output_5 = models.TextField(default="")
    output_6 = models.TextField(default="")
    output_7 = models.TextField(default="")
    output_8 = models.TextField(default="")
    output_9 = models.TextField(default="")

    def __str__(self):
        return self.title

class Submission(models.Model):
    problem = models.ForeignKey(Problem, on_delete=models.CASCADE)
    score = models.FloatField()
    maxscore = models.FloatField()
    author = models.ForeignKey(Profile, on_delete=models.CASCADE)
    date = models.DateTimeField('date submitted', auto_now_add=True)

    def __str__(self):
        return self.id

class Quiz(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    img = models.ImageField()
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.title

    def get_questions(self):
        qs = Question.objects.filter(quiz=self)
        return qs

class QuizHighScore(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    score = models.IntegerField()

    class Meta:
        unique_together = (('user', 'quiz'),)

class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    img = models.ImageField(null=True, blank=True)
    question_text = models.CharField(max_length=200)
    code = models.TextField(null=True, blank=True)
    pub_date = models.DateTimeField('date published', auto_now_add=True)

    def __str__(self):
        return f"{self.quiz.title} - {self.question_text}"

    def get_choices(self):
        ch = Choice.objects.filter(question=self)
        return ch

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200, null=True, blank=True)
    choice_img = models.ImageField(null=True, blank=True)
    is_correct = models.BooleanField()

    def __str__(self):
        return f"{self.question.question_text} - {self.choice_text}"

class Comment(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    content = models.TextField()
    reply_to = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True)
    problem = models.ForeignKey(Problem, on_delete=models.CASCADE, null=True, blank=True)
