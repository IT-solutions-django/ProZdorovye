from django.contrib import admin
from django.db import models
from .models import Doctor 



@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin): 
    list_display = ['last_name', 'first_name', 'patronymic', 'slug']
    search_fields = ['first_name', 'last_name', 'patronymic']

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        if not obj:  
            max_priority = Doctor.objects.aggregate(max_priority=models.Max('display_priority'))['max_priority']
            form.base_fields['display_priority'].initial = (max_priority or 0) + 1
        return form