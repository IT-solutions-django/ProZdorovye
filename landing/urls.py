from django.urls import path
from .views import *


app_name = 'landing'


urlpatterns = [
    path('home/', HomeView.as_view(), name='home'), 
    path('contacts/', ContactsView.as_view(), name='contacts'), 
    path('request_saved/', RequestSavedView.as_view(), name='request_saved'),
]