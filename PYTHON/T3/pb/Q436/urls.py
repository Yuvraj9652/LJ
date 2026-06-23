from django.urls import path
from Q436.views import home

urlpatterns = [
    path("",home,name='home'),
]
