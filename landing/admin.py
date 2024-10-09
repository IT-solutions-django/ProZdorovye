from django.contrib import admin
from .models import Article, Review


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin): 
    list_display = ['title', 'content', 'created_at', 'photo']
    search_fields = ['title', 'content']


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin): 
    list_display = ['rate', 'username', 'content', 'created_at']
    search_fields = ['title', 'content']
    