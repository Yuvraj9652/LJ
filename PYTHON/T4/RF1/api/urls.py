from django.urls import path
from .views import home,api_demo,api_detail

urlpatterns = [
    path('',api_demo,name='home'),
    path('api_details/<int:id>',api_detail,name='api_detail')
]
