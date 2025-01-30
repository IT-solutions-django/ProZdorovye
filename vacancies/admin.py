from django.contrib import admin
from .models import Vacancy, VacancyReply


@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin): 
    list_display = ['title']
    search_fields = ['title']
    prepopulated_fields = {'slug': ('title',)}


@admin.register(VacancyReply)
class VacancyReplyAdmin(admin.ModelAdmin): 
    list_display = ['phone']
    search_fields = ['phone']