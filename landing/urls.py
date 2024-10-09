from django.urls import path
from .views import *


app_name = 'landing'


urlpatterns = [
    path('home/', HomeView.as_view(), name='home'), 
]