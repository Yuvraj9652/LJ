from django.urls import path
from .views import home,info,update,adddata

urlpatterns = [
    path('',home,name="home"),
    path('info/<int:id>/',info,name="info"),
    path('update/<int:id>/',update,name="update"),
    path('adddata/',adddata,name="adddata")
]
