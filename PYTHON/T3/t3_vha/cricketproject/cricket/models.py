from django.db import models

# Create your models here.
class Player(models.Model):
    name = models.CharField(max_length=100)
    team = models.CharField(max_length=100)
    runs = models.IntegerField()
    dob = models.DateField()

    def __str__(self):
        return self.name