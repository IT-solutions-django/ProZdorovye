from django.db import models
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile
import os

from django.urls import reverse
from services.models import Speciality


class Doctor(models.Model): 
    first_name = models.CharField('Имя', max_length=50)
    last_name = models.CharField('Фамилия', max_length=50)
    patronymic = models.CharField('Отчество', max_length=50)
    hire_year = models.SmallIntegerField('Год начала работы')
    description = models.TextField('Описание', null=True, blank=True) 
    photo = models.ImageField('Фото', upload_to='doctors', null=True)
    specialities = models.ManyToManyField(verbose_name='Специализации', to=Speciality, related_name='doctors')
    prodoctorov_profile = models.TextField('Ссылка на профиль в ПроДокторов')

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

    def get_absolute_url(self) -> str: 
        return reverse('doctors:doctor', args=[self.pk])