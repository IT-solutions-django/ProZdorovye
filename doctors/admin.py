from django.contrib import admin
from .models import Doctor 
from landing.models import Branch 


@admin.register(Branch)
class BranchAdmin(admin.ModelAdmin): 
    list_display = ['name', 'address', 'phone']
    search_fields = ['name', 'address']


@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin): 
    list_display = ['pk', 'first_name', 'last_name', 'patronymic', 'phone', 'email']
    search_fields = ['first_name', 'last_name', 'patronymic']