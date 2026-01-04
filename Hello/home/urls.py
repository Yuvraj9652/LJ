from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path("", home, name="home"),
    path("login/", loginUser, name="login"),
    path("logout/", logoutUser, name="logout"),
    path("dashboard/", dashboard, name="dashboard"),
    path("signup/", signup, name="signup"),
]