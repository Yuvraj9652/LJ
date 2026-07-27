from django.urls import path
from .views import home,info,update,adddata,delete

urlpatterns = [
    path('',home,name="shome"),
    path('info/<int:id>/',info,name="info"),
    path('update/<int:id>/',update,name="update"),
    path('adddata/',adddata,name="adddata"),
    path('delete/<int:id>/',delete,name="delete"),
]