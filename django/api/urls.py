from django.urls import path, include
from rest_framework import routers

from .views import BookViewSet, JapaneseHolidayViewSet

router = routers.DefaultRouter()
router.register(r'book', BookViewSet, 'book')

urlpatterns = [
    path('', include(router.urls)),
    path('japanese-holiday', JapaneseHolidayViewSet.as_view())
]
