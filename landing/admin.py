from django.contrib import admin
from .models import Request, Branch, Question


@admin.register(Request)
class RequestAdmin(admin.ModelAdmin): 
    list_display = ['name', 'phone', 'email', 'is_open']
    search_fields = ['name', 'email']


@admin.register(Branch)
class BranchAdmin(admin.ModelAdmin): 
    list_display = ['name', 'address', 'phone']
    search_fields = ['name', 'address']


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin): 
    list_display = ['name', 'phone', 'email', 'text', 'is_open']
    search_fields = ['name', 'address', 'text']