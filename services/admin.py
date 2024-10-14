from django.contrib import admin
from .models import ServiceType


@admin.register(ServiceType)
class ServiceTypeAdmin(admin.ModelAdmin): 
    list_display = ['name', 'price', 'speciality']
    search_fields = ['name']