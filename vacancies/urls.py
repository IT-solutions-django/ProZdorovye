from django.urls import path
from .views import *


app_name = 'vacancies'


urlpatterns = [
    path('', VacanciesView.as_view(), name='vacancies'),
    path('<slug:vacancy_slug>/', VacancyView.as_view(), name='vacancy'),
    path('api/save_reply/', SaveVacancyReply.as_view(), name='vacancy'),
]