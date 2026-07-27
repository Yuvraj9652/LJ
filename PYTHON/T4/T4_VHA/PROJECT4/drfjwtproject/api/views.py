from rest_framework import viewsets
from .models import Student
from .serializers import StudentSerializer
from .permissions import IsAdminOrReadOnly

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all().order_by('id')
    serializer_class = StudentSerializer
    permission_classes = [IsAdminOrReadOnly]