from django.contrib import admin
from .models import Symptom, Speciality, SpecialityPhoto


class SymptomInline(admin.TabularInline): 
    model = Symptom
    extra = 0

class SpecialityPhotoInline(admin.TabularInline): 
    model = SpecialityPhoto
    extra = 0


@admin.register(Speciality)
class SpecialityAdmin(admin.ModelAdmin): 
    list_display = ['pk', 'name', 'description', 'icon']
    search_fields = ['name', 'description']
    prepopulated_fields = {'slug': ('name',)}
    inlines = [SpecialityPhotoInline, SymptomInline]


@admin.register(SpecialityPhoto)
class SpecialityPhotoAdmin(admin.ModelAdmin): 
    list_display = ['pk', 'image']


@admin.register(Symptom)
class SymptomAdmin(admin.ModelAdmin): 
    list_display = ['text']
    search_fields = ['text']


