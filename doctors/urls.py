from django.urls import path
from .views import *


app_name = 'doctors'


urlpatterns = [
    path('api/specialities/', SpecialitiesAPIView.as_view(), name='api_specialities'), 
    path('api/doctors/', DoctorsAPIView.as_view(), name='api_doctors'), 
]