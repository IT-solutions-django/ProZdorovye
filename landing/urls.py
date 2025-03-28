from django.urls import path
from .views import *


app_name = 'landing'


urlpatterns = [
    path('', HomeView.as_view(), name='home'), 
    path('map/', MapView.as_view(), name='map'),
    path('contacts/', ContactsView.as_view(), name='contacts'), 
    path('juridical/', JuridicalInfoView.as_view(), name='juridical_info'), 
    path('privacy-policy/', PrivacyPolicyView.as_view(), name='privacy_policy'),
    path('api/get_request_form_html/', RequestFormHtmlApi.as_view(), name='request_form_html'),
    path('api/get_question_form_html/', QuestionFormHtmlApi.as_view(), name='question_form_html'),
    path('api/get_contact_info_html/', ContactInfoHtmlApi.as_view(), name='contact_info_html'),
    path('api/save_request/', SaveRequestView.as_view(), name='save_request'),
    path('api/save_question/', SaveQuestionView.as_view(), name='save_question'),
    path('api/get_phone_number/', PhoneNumberApi.as_view(), name='get_phone_number'),
]

handler404 = 'landing.views.handler404'