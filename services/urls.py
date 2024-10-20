from django.urls import path
from .views import *


app_name = 'services'


urlpatterns = [
    path('<slug:speciality_slug>', ServicesView.as_view(), name='speciality'),

    path('api/specialities/', SpecialitiesAPIView.as_view(), name='specialities_api'),
    path('api/profession_mapper/', ProfessionsMapperAPIView.as_view(), name='professions_mapper_api'),
]