from django.urls import path
from .views import *


app_name = 'landing'


urlpatterns = [
    path('home/', HomeView.as_view(), name='home'), 
    path('contacts/', ContactsView.as_view(), name='contacts'), 
    path('request_saved/', RequestSavedView.as_view(), name='request_saved'),

    path('api/request_form_html/', RequestFormHtmlApi.as_view(), name='request_form_html'),
    path('api/question_form_html/', QuestionFormHtmlApi.as_view(), name='question_form_html'),
]