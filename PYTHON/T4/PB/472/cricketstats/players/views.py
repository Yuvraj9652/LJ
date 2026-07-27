from django.shortcuts import render,get_object_or_404
from .models import Player
# Create your views here.
def home(request):
    players=get_object_or_404(Player)
    return render(request,'home.html',{'players':players})
