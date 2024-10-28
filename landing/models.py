from django.db import models
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile
import os
    

class Request(models.Model): 
    name = models.CharField('Имя', max_length=100) 
    phone = models.CharField('Телефон', max_length=18) 
    email = models.EmailField('Email', null=True, blank=True)
    is_closed = models.BooleanField('Обработано', default=False)

    class Meta: 
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'

    def __str__(self) -> str: 
        return f'{self.is_closed} | {self.name}, {self.phone}'
    

class Question(models.Model): 
    name = models.CharField('Имя', max_length=100) 
    phone = models.CharField('Телефон', max_length=18) 
    email = models.EmailField('Email', null=True, blank=True)
    text = models.CharField('Текст', max_length=250, null=True, blank=True)
    is_closed = models.BooleanField('Обработано', default=False)

    class Meta: 
        verbose_name = 'Вопрос'
        verbose_name_plural = 'Вопросы'

    def __str__(self) -> str: 
        return f'{self.is_closed} | {self.name}, {self.phone}'