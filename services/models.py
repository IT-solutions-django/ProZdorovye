from django.db import models
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile
import os

from django.urls import reverse



class SpecialityPhoto(models.Model):
    image = models.ImageField('Изображение', upload_to='articles', null=True, blank=True)
    created_at = models.DateTimeField('Дата загрузки', auto_now_add=True)

    class Meta:
        verbose_name = 'Фото специализации'
        verbose_name_plural = 'Фото специализации'

    def __str__(self):
        return self.image.name

    def save(self, *args, **kwargs):
        name = os.path.splitext(self.image.name)[0].lower()
        img = Image.open(self.image)
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
        self.image.save(f"{name}.webp", img_file, save=False)
        super(SpecialityPhoto, self).save(*args, **kwargs)



class Speciality(models.Model): 
    name = models.CharField('Название', max_length=80)
    description = models.TextField('Описание')
    icon = models.FileField('Иконка', upload_to='specialities', null=True)
    photos = models.ManyToManyField(SpecialityPhoto, verbose_name='Фотографии', blank=True)
    slug = models.SlugField('Слаг')
    
    class Meta: 
        ordering = ['name']
        verbose_name = 'Специализация'
        verbose_name_plural = 'Специализации'

    def __str__(self) -> str: 
        return self.name

    def save(self, *args, **kwargs):
        file_extension = os.path.splitext(self.icon.name)[1].lower()

        name = os.path.splitext(self.image.name)[0].lower()

        if file_extension == '.svg': 
            super(Speciality, self).save(*args, **kwargs)
            return 

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

    def get_absolute_url(self): 
        return reverse('services:speciality', args=[self.slug])
    