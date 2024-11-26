from django.contrib import admin
from .models import (
    Request, 
    Question, 
    UserAgreementPDF, 
    LicensePage, 
    ContactInfo, 
    JuridicalInfo, 
    ProcessingDataAgreement, 
    FilialInfo
)


@admin.register(Request)
class RequestAdmin(admin.ModelAdmin): 
    list_display = ['name', 'phone', 'email', 'is_closed']
    search_fields = ['name', 'email']


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin): 
    list_display = ['name', 'phone', 'email', 'text', 'is_closed']
    search_fields = ['name', 'address', 'text']


@admin.register(UserAgreementPDF)
class UserAgreementPDFAdmin(admin.ModelAdmin): 
    list_display = ['title']


@admin.register(ProcessingDataAgreement)
class ProcessingDataAgreementAdmin(admin.ModelAdmin): 
    list_display = ['title']
    exclude = ['title']


@admin.register(LicensePage)
class LicensePageAdmin(admin.ModelAdmin): 
    list_display = ['pk', 'file']


class FilialInfoInline(admin.TabularInline): 
    model = FilialInfo
    extra = 0


@admin.register(ContactInfo)
class ContactInfoAdmin(admin.ModelAdmin): 
    list_display = ['title']
    exclude = ['title']
    inlines = [
        FilialInfoInline
    ]


@admin.register(JuridicalInfo)
class JuridicalInfoAdmin(admin.ModelAdmin): 
    list_display = ['title']
    exclude = ['title']