from django.contrib import admin
from .models import Review


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin): 
    list_display = ['rate', 'username', 'content', 'created_at']
    search_fields = ['title', 'content']