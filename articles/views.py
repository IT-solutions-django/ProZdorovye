from django.shortcuts import render
from django.views import View
from .models import Article 


class ArticlesListView(View): 
    template_name = 'articles/articles.html' 

    def get(self, request): 
        articles = Article.objects.all()
        context = {
            'articles': articles, 
        }
        return render(request, self.template_name, context)


class ArticleView(View): 
    template_name = 'articles/article.html' 

    def get(self, request, article_slug: str): 
        article = Article.objects.get(slug=article_slug) 
        rest_articles = Article.objects.all().exclude(pk=article.pk)
        context = {
            'article': article, 
            'rest_articles': rest_articles,
        }
        return render(request, self.template_name, context)