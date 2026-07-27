from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Player
from .serializers import PlayerSerializer
# Create your views here.

@api_view(["GET","POST"])
def api_demo(request):
    if request.method =='GET':
        player = Player.objects.all()
        serializer = PlayerSerializer(player,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    elif request.method=='POST':
        serializer = PlayerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)      
    
# @api_view(['GET','PUT','PATCH','DELETE'])
# def api_detail(request):
#     try:
#         player=Player.objects.get(pk=id)
#     except Player