from django.contrib import admin
from .models import Article


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin): 
    list_display = ['title', 'content', 'created_at']
    search_fields = ['title', 'content']
    prepopulated_fields = {'slug': ('title',)}