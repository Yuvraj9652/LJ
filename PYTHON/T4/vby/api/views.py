from django.shortcuts import render
from rest_framework import viewsets
from .models import Player
from .serializers import PlayerSerializer
# Create your views here.
class playerviewset(viewsets.ModelViewSet):
    serializer_class=PlayerSerializer
    queryset=Player.objects.all()