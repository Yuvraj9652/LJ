from django.urls import path
from app1.views import home,about,nav

urlpatterns = [
    path("", home, name="home"),
    path("about/", about, name="about"),
    path('nav/', nav, name='nav')
]