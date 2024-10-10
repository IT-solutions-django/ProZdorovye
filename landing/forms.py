from django import forms 
from .models import Request


class RequestForm(forms.ModelForm): 
    class Meta:
        model = Request
        fields = ['name', 'phone', 'email', 'is_open']
        labels = {
            'name': 'Имя',
            'phone': 'Телефон',
            'email': 'Электронная почта',
        }
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form__input'}),
            'phone': forms.TextInput(attrs={'class': 'form__input'}),
            'email': forms.EmailInput(attrs={'class': 'form__input'}),
        }