from django.shortcuts import render
from django.views import View 


class ArticleView(View): 
    template_name = 'articles/article.html' 

    def get(self, request): 
        return ...