from django.db import models
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile
import os
from django.utils.text import slugify
from unidecode import unidecode
from django.urls import reverse
from services.models import Speciality


class Doctor(models.Model): 
    last_name = models.CharField('Фамилия', max_length=50)
    first_name = models.CharField('Имя', max_length=50)
    patronymic = models.CharField('Отчество', max_length=50)
    hire_year = models.SmallIntegerField('Год начала работы')
    description = models.TextField('Описание', null=True, blank=True) 
    photo = models.ImageField('Фото', upload_to='doctors', null=True)
    specialities = models.ManyToManyField(verbose_name='Специализации', to=Speciality, related_name='doctors')
    prodoctorov_profile = models.TextField('Ссылка на профиль в ПроДокторов')
    slug = models.SlugField('Слаг', max_length=100, blank=True)

    class Meta: 
        verbose_name = 'Врач'
        verbose_name_plural = 'Врачи'
        ordering = ['pk']

    def __str__(self) -> str: 
        return f'{self.first_name} {self.last_name} {self.patronymic}'
    
    def save(self, *args, **kwargs):
        if self.pk:  
            old_photo = Doctor.objects.filter(pk=self.pk).first().photo
            if old_photo and self.photo and old_photo.name == self.photo.name:
                super(Doctor, self).save(*args, **kwargs)
                return

        initials = f"{self.first_name[0]}-{self.patronymic[0]}-{self.last_name}".lower()
        self.slug = slugify(unidecode(initials))

        photo_name = os.path.splitext(os.path.basename(self.photo.name))[0].lower()  
        img = Image.open(self.photo)
        img_io = BytesIO()
        img.save(img_io, format="WebP")
        img_file = InMemoryUploadedFile(
            file=img_io, 
            field_name=None, 
            name=f"{photo_name}.webp", 
            content_type="image/webp", 
            size=img_io.tell(), 
            charset=None,
        )
        self.photo.save(f"{photo_name}.webp", img_file, save=False)
        super(Doctor, self).save(*args, **kwargs)

    def get_absolute_url(self) -> str: 
        return reverse('doctors:doctor', args=[self.slug])