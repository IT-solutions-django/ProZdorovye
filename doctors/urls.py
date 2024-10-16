from django.urls import path
from .views import *


app_name = 'doctors'


urlpatterns = [
    path('doctor/<int:doctor_id>/', DoctorView.as_view(), name='doctor'),
    path('', DoctorsView.as_view(), name='doctors'),
    
    path('api/doctors/', DoctorsAPIView.as_view(), name='api_doctors'), 
]