from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import CourseViewset,StudentViewset

router=DefaultRouter()
router.register(r"courses",CourseViewset,basename="course")
router.register(r"students",StudentViewset,basename="student")
# urlpatterns = router.urls
urlpatterns = [
    path("",include(router.urls)),
]