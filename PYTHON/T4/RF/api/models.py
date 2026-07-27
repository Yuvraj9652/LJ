from django.db import models

# Create your models here.
class Player(models.Model):
    name=models.CharField()
    test=models.IntegerField()
    score=models.IntegerField()
    def __str__(self):
        return f"{self.name}-{self.test}-{self.score}"
    