from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from .models import Player
from rest_framework import status
from rest_framework.decorators import api_view
from .serializers import PlayerSerializer
from rest_framework.response import Response

# Create your views here.
@api_view(["GET","POST"])
def home(request):
    if request.method=="GET":
        student=Player.objects.all()
        serializer=PlayerSerializer(student,many=True)
        return Response(serializer.data)
    elif request.method=="POST":
        serializer=PlayerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer,status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET","PUT","PATCH","DELETE"])
def api_detail(request,id):
    try:
        player=Player.objects.get(pk=id)
    except Player.DoesNotExist:
        return Response({"message":"Record Not Found"},status=status.HTTP_400_BAD_REQUEST)
    if request.method=="GET":
        serializer=PlayerSerializer(player)
        return Response(serializer.data,status=status.HTTP_200_OK)
    elif request.method=="PUT":
        serializer=PlayerSerializer(player,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    elif request.method=="PATCH":
        serializer=PlayerSerializer(player,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)    
    elif request.method=="DELETE":
        player.delete()
        return Response({"message":"record Deleted"},status=status.HTTP_204_NO_CONTENT)
