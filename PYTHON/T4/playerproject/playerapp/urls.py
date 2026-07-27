from django.urls import path
from .views import home,welcome,editp,deletep,addp

urlpatterns = [
    path('home/',home,name="home"),
    path('welcome/',welcome,name="welcome"),
    path('addplayer/',addp,name="addplayer"),
    path('edit/<int:id>/',editp,name="edit"),
    path('delete/<int:id>/',deletep,name="delete"),
]
