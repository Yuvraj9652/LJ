from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Student
from .serializers import StudentSerializer
from rest_framework.response import Response
# Create your views here.
def home(request):
    data1=list(Student.objects.all().values())
    data = [
        {'name': 'raj', 'sex': 'no experience'},
        {'name':'daksh','sex':['monkey','deer','horse','not humans','CJP']}
    ]
    return JsonResponse(data, safe=False)

@api_view(["GET","POST"])
def home(request):
    if request.method=="GET":
        student=Student.objects.all()
        serializer=StudentSerializer(student,many=True)
        return Response(serializer.data)
    elif request.method=="POST":
        serializer=StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.error,status=status.HTTP_400_BAD_REQUEST)