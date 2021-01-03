from django.db import models
from django.contrib.auth.models import User

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

class Submission(models.Model):
    problem = models.ForeignKey(Problem, on_delete=models.CASCADE)
    score = models.FloatField()
    maxscore = models.FloatField()
    author = models.ForeignKey(Profile, on_delete=models.CASCADE)
    date = models.DateTimeField('date submitted', auto_now_add=True)

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
    user = models.ForeignKey(User, on_delete=models.CASCADE)
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

class Discussion(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    discussion = models.ForeignKey(Discussion, on_delete=models.CASCADE)
    content = models.TextField()
    date = models.DateTimeField('date posted', auto_now_add=True)