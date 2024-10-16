from django import forms 
from .models import Request, Question


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


class QuestionForm(forms.ModelForm): 
    class Meta:
        model = Question
        fields = ['name', 'phone', 'email', 'text', 'is_open']
        labels = {
            'name': 'Имя',
            'phone': 'Телефон',
            'email': 'Электронная почта',
            'text': 'Сообщение',
        }
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form__input'}),
            'phone': forms.TextInput(attrs={'class': 'form__input'}),
            'email': forms.EmailInput(attrs={'class': 'form__input'}),
            'text': forms.EmailInput(attrs={'class': 'Сообщение'}),
        }