from django.urls import path
from .views import *


app_name = 'prices'


urlpatterns = [
    path('', PricesView.as_view(), name='prices'),
    path('search/', ServiceSearchView.as_view(), name='search'),

    path('api/prices/', PricesAPIView.as_view(), name='prices_api'),
]