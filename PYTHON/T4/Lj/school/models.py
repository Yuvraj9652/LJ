from django.db import models

# Create your models here.
class Evaluation(models.Model):
    name=models.CharField(max_length=50)
    course=models.CharField(max_length=50)
    score=models.IntegerField()
    email=models.EmailField()

    def __str__(self):
        return self.name