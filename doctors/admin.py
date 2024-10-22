from django.contrib import admin
from .models import Doctor 


@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin): 
    list_display = ['last_name', 'first_name', 'patronymic', 'slug']
    search_fields = ['first_name', 'last_name', 'patronymic']