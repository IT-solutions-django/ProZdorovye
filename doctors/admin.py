from django.contrib import admin
from .models import Doctor 


@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin): 
    list_display = ['pk', 'first_name', 'last_name', 'patronymic']
    search_fields = ['first_name', 'last_name', 'patronymic']