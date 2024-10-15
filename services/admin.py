from django.contrib import admin
from .models import Symptom, Speciality, SpecialityPhoto


@admin.register(Speciality)
class SpecialityAdmin(admin.ModelAdmin): 
    list_display = ['pk', 'name', 'description', 'icon']
    search_fields = ['name', 'description']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(SpecialityPhoto)
class SpecialityPhotoAdmin(admin.ModelAdmin): 
    list_display = ['pk', 'image']


@admin.register(Symptom)
class SymptopAdmin(admin.ModelAdmin): 
    list_display = ['text']
    search_fields = ['text']


