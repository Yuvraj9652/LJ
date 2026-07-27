from django.db import models

class Player(models.Model):
    player_name = models.CharField(max_length=100)
    country = models.CharField(max_length=50)
    batting_style = models.CharField(max_length=50)
    bowling_style = models.CharField(max_length=50)
    age = models.IntegerField()
    runs_scored = models.IntegerField()
    wickets_taken = models.IntegerField()

    def __str__(self):
        return self.player_name