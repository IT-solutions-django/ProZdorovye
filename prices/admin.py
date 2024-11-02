from django.contrib import admin
from .models import ServiceType


@admin.register(ServiceType)
class ServiceTypeAdmin(admin.ModelAdmin): 
    list_display = ['pk', 'name',  'info', 'price', 'speciality', 'doctor']
    search_fields = ['name']