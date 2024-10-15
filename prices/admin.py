from django.contrib import admin
from .models import ServiceType


@admin.register(ServiceType)
class ServiceTypeAdmin(admin.ModelAdmin): 
    list_display = ['pk', 'name', 'price', 'speciality']
    search_fields = ['name']