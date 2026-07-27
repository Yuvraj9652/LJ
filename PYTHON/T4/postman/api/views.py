from django.shortcuts import render
from rest_framework import viewsets
from .models import Course,Student
from .serializers import CourseSerializer,StudentSerializer
from api.permissions import IsAdminOrReadOnly
# Create your views here.
class CourseViewset(viewsets.ModelViewSet):
    serializer_class=CourseSerializer
    queryset=Course.objects.all()
    permission_classes=[IsAdminOrReadOnly]

class StudentViewset(viewsets.ModelViewSet):
    serializer_class=StudentSerializer
    queryset=Student.objects.all()