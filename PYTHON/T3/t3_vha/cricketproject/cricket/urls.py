from .views import home, about, navbar
from django.urls import path

urlpatterns = [
    path("", home, name="home"),
    path("about/", about, name="about"),
    path("navbar/", navbar, name="navbar"),
]