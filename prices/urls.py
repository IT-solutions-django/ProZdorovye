from django.urls import path
from .views import *


app_name = 'prices'


urlpatterns = [
    path('', PricesView.as_view(), name='prices'),
]