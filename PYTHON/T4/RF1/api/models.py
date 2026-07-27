from django.db import models

# Create your models here.
class Player(models.Model):
    name=models.CharField(max_length=50)
    test=models.IntegerField()
    score=models.IntegerField()

    def __str__(self):
        return self.name