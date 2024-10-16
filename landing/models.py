from django.db import models
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile
import os
    

class Request(models.Model): 
    name = models.CharField('Имя', max_length=100) 
    phone = models.CharField('Телефон', max_length=18) 
    email = models.EmailField('Email')
    is_open = models.BooleanField('Открыта', default=True)

    class Meta: 
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'

    def __str__(self) -> str: 
        return f'{self.is_open} | {self.name}, {self.phone}'
    

class Branch(models.Model): 
    name = models.CharField('Название', max_length=100)
    address = models.CharField('Адрес', max_length=100) 
    phone = models.CharField('Номер телефона', max_length=18)

    class Meta: 
        verbose_name = 'Филиал'
        verbose_name_plural = 'Филиалы'

    def __str__(self) -> str: 
        return self.address
    

class Question(models.Model): 
    name = models.CharField('Имя', max_length=100) 
    phone = models.CharField('Телефон', max_length=18) 
    email = models.EmailField('Email')
    text = models.CharField('Текст', max_length=250)
    is_open = models.BooleanField('Открыта', default=True)

    class Meta: 
        verbose_name = 'Вопрос'
        verbose_name_plural = 'Вопросы'

    def __str__(self) -> str: 
        return f'{self.is_open} | {self.name}, {self.phone}'