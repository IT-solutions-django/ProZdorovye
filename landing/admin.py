from django.contrib import admin
from .models import Article, Review, Request, Photo


@admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin): 
    list_display = ['image', 'created_at']


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin): 
    list_display = ['title', 'content', 'created_at']
    search_fields = ['title', 'content']


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin): 
    list_display = ['rate', 'username', 'content', 'created_at']
    search_fields = ['title', 'content']


@admin.register(Request)
class RequestAdmin(admin.ModelAdmin): 
    list_display = ['name', 'phone', 'email', 'is_open']
    search_fields = ['name', 'email']