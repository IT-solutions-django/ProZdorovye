from django.urls import path
from .views import *


app_name = 'doctors'


urlpatterns = [
    path('', DoctorsView.as_view(), name='doctors'),
    path('api/specialities/', SpecialitiesAPIView.as_view(), name='api_specialities'), 
    path('api/doctors/', DoctorsAPIView.as_view(), name='api_doctors'), 
]