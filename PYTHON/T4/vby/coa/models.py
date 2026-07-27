from django.db import models

# Create your models here.
class FB(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField()
    ipe=models.IntegerField()
    gp=models.IntegerField()
    def __str__(self):
        return self.name