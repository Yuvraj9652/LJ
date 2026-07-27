from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import playerviewset
router=DefaultRouter()
router.register(r"players",playerviewset,basename="player")
urlpatterns = router.urls
