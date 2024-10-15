from django.urls import path
from .views import *


app_name = 'articles'


urlpatterns = [
    path('<slug:article_slug>/', ArticleView.as_view(), name='article'),
]