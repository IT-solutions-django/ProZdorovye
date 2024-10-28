from django import forms 
from .models import Request, Question


class RequestForm(forms.ModelForm): 
    class Meta:
        model = Request
        fields = ['name', 'phone', 'email']
        labels = {
            'name': 'Имя',
            'phone': 'Телефон',
            'email': 'Электронная почта',
        }
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form__input'}),
            'phone': forms.TextInput(attrs={'class': 'form__input', 'minlength': 18}),
            'email': forms.EmailInput(attrs={'class': 'form__input'}),
        }


class QuestionForm(forms.ModelForm): 
    class Meta:
        model = Question
        fields = ['name', 'phone', 'email', 'text']
        labels = {
            'name': 'Имя',
            'phone': 'Телефон',
            'email': 'Электронная почта',
            'text': 'Сообщение',
        }
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form__input'}),
            'phone': forms.TextInput(attrs={'class': 'form__input', 'minlength': 18}),
            'email': forms.EmailInput(attrs={'class': 'form__input'}),
            'text': forms.Textarea(attrs={'class': 'form__input'}),
        }