from django.urls import path
from api.views import home,api_detail
urlpatterns = [
    path("",home),
    path("details/<int:id>/",api_detail,name="api_detail")
]