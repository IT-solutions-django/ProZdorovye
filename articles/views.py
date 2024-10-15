from django.shortcuts import render
from django.views import View
from .models import Article 


class ArticleView(View): 
    template_name = 'articles/article.html' 

    def get(self, request, article_slug: str): 
        article = Article.objects.get(slug=article_slug) 
        context = {
            'article': article, 
        }
        return render(request, self.template_name, context)