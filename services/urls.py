from django.urls import path
from .views import *


app_name = 'services'


urlpatterns = [
    path('<slug:speciality_slug>', ServicesView.as_view(), name='speciality'),
]