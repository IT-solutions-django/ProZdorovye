from django import forms 
from .models import VacancyReply


class VacancyReplyForm(forms.ModelForm): 
    class Meta:
        model = VacancyReply
        fields = ['last_name', 'first_name', 'phone', 'resume']
        labels = {
            'last_name': 'Фамилия',
            'first_name': 'Имя',
            'phone': 'Телефон',
            'resume': 'Резюме',
        }
        widgets = {
            'last_name': forms.TextInput(attrs={'class': 'form__input'}),
            'first_name': forms.TextInput(attrs={'class': 'form__input'}),
            'phone': forms.TextInput(attrs={'class': 'form__input'}),
            'resume': forms.FileInput(
                attrs={
                    'class': 'form__input', 
                    "class": "input-file",
                    "accept": ".pdf,.doc,.docx",
            })
        }