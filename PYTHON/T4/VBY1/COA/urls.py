from django.urls import path
from .views import home,add,edit,delete
urlpatterns = [
    path('',home,name='home'),
    path('add/',add,name='add'),
    path('edit/<str:name>/',edit,name='edit'),
    path('delete/<str:name>/',delete,name='delete'),
]