from django.urls import path
from .views import *


app_name = 'landing'


urlpatterns = [
    path('', HomeView.as_view(), name='home'), 
    path('contacts/', ContactsView.as_view(), name='contacts'), 
    path('request_saved/', RequestSavedView.as_view(), name='request_saved'),

    path('api/get_request_form_html/', RequestFormHtmlApi.as_view(), name='request_form_html'),
    path('api/get_question_form_html/', QuestionFormHtmlApi.as_view(), name='question_form_html'),
    path('api/save_request/', SaveRequestView.as_view(), name='save_request'),
    path('api/save_question/', SaveQuestionView.as_view(), name='save_question'),
]