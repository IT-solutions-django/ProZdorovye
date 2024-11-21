from django.contrib import admin
from .models import ServiceType, PricePDF


@admin.register(ServiceType)
class ServiceTypeAdmin(admin.ModelAdmin): 
    list_display = ['pk', 'name',  'info', 'price', 'speciality', 'doctor']
    search_fields = ['name']


@admin.register(PricePDF)
class PricePDFAdmin(admin.ModelAdmin): 
    list_display = ['title']
    exclude = ['title']