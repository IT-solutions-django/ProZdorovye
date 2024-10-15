from django.contrib import admin
from .models import Request 
from articles.models import Article, ArticlePhoto


@admin.register(ArticlePhoto)
class PhotoAdmin(admin.ModelAdmin): 
    list_display = ['image', 'created_at']


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin): 
    list_display = ['title', 'content', 'created_at']
    search_fields = ['title', 'content']
    prepopulated_fields = {'slug': ('title',)}


@admin.register(Request)
class RequestAdmin(admin.ModelAdmin): 
    list_display = ['name', 'phone', 'email', 'is_open']
    search_fields = ['name', 'email']