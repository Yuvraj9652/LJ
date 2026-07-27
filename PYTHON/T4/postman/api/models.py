from django.db import models

# Create your models here.
class Course(models.Model):
    name=models.CharField(max_length=100)
    duration=models.IntegerField()
    def __str__(self):
        return self.name
class Student(models.Model):
    name=models.ForeignKey(Course,on_delete=models.CASCADE)
    email=models.EmailField()
    age=models.IntegerField()
    def __str__(self):
        return self.email
    