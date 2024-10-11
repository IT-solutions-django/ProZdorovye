from django.db import models
import uuid
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile
import os


class Branch(models.Model): 
    name = models.CharField('Название', max_length=100)
    address = models.CharField('Адрес', max_length=100) 
    phone = models.CharField('Номер телефона', max_length=18)

    class Meta: 
        verbose_name = 'Филиал'
        verbose_name_plural = 'Филиалы'

    def __str__(self) -> str: 
        return self.address


class Speciality(models.Model): 
    name = models.CharField('Название', max_length=80)
    description = models.TextField('Описание')
    icon = models.FileField('Иконка', upload_to='specialities', null=True)
    
    class Meta: 
        ordering = ['name']
        verbose_name = 'Специализация'
        verbose_name_plural = 'Специализации'

    def __str__(self) -> str: 
        return self.name

    def save(self, *args, **kwargs):
        file_extension = os.path.splitext(self.icon.name)[1].lower()

        if file_extension == '.svg': 
            super(Speciality, self).save(*args, **kwargs)
            return 

        name = str(uuid.uuid1())
        img = Image.open(self.icon)
        img_io = BytesIO()
        img.save(img_io, format="WebP")
        img_file = InMemoryUploadedFile(
            file=img_io, 
            field_name=None, 
            name=f"{name}.webp", 
            content_type="image/webp", 
            size=img_io.tell(), 
            charset=None,
        )
        self.icon.save(f"{name}.webp", img_file, save=False)
        super(Speciality, self).save(*args, **kwargs)


class ServiceType(models.Model): 
    name = models.CharField('Название', max_length=50)
    price = models.DecimalField('Цена', decimal_places=2, max_digits=8)
    speciality = models.ForeignKey(verbose_name='Специализация', to=Speciality, on_delete=models.CASCADE)

    class Meta: 
        verbose_name = 'Тип услуги'
        verbose_name_plural = 'Типы услуг'
    
    def __str__(self) -> str: 
        return f'{self.speciality} | {self.name} {self.price}р'


class Doctor(models.Model): 
    first_name = models.CharField('Имя', max_length=50)
    last_name = models.CharField('Фамилия', max_length=50)
    patronymic = models.CharField('Отчество', max_length=50, null=True, blank=True)
    phone = models.CharField('Телефон', max_length=20, unique=True, null=True, blank=True)
    email = models.EmailField('Электронная почта', unique=True, null=True, blank=True) 
    hire_year = models.SmallIntegerField('Год начала работы')
    experience = models.SmallIntegerField('Стаж', null=True)
    description = models.TextField('Описание', null=True, blank=True) 
    photo = models.ImageField('Фото', upload_to='doctors', null=True)
    branch = models.ForeignKey(verbose_name='Филиал', to=Branch, on_delete=models.CASCADE)
    specialities = models.ManyToManyField(verbose_name='Специализации', to=Speciality, related_name='doctors')

    class Meta: 
        verbose_name = 'Врач'
        verbose_name_plural = 'Врачи'

    def __str__(self) -> str: 
        return f'{self.first_name} {self.last_name} {self.patronymic if self.patronymic else ""}'
    
    def save(self, *args, **kwargs):
        name = os.path.splitext(self.photo.name)[0].lower()
        img = Image.open(self.photo)
        img_io = BytesIO()
        img.save(img_io, format="WebP")
        img_file = InMemoryUploadedFile(
            file=img_io, 
            field_name=None, 
            name=f"{name}.webp", 
            content_type="image/webp", 
            size=img_io.tell(), 
            charset=None,
        )
        self.photo.save(f"{name}.webp", img_file, save=False)
        super(Doctor, self).save(*args, **kwargs)