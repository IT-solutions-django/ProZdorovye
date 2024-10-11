from django.contrib import admin
from .models import Branch, Speciality, ServiceType, Doctor


@admin.register(Branch)
class BranchAdmin(admin.ModelAdmin): 
    list_display = ['name', 'address', 'phone']
    search_fields = ['name', 'address']


@admin.register(Speciality)
class SpecialityAdmin(admin.ModelAdmin): 
    list_display = ['name', 'description', 'icon']
    search_fields = ['name', 'description']


@admin.register(ServiceType)
class ServiceTypeAdmin(admin.ModelAdmin): 
    list_display = ['name', 'price', 'speciality']
    search_fields = ['name']


@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin): 
    list_display = ['pk', 'first_name', 'last_name', 'patronymic', 'phone', 'email']
    search_fields = ['first_name', 'last_name', 'patronymic']