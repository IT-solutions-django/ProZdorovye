from django.urls import path
from .views import *


app_name = 'articles'


urlpatterns = [
    path('articles/', ArticlesListView.as_view(), name='articles_list'),
    path('<slug:article_slug>/', ArticleView.as_view(), name='article'),
]