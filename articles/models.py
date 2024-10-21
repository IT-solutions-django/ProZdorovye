from django.db import models
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile
import os
from django.urls import reverse
from services.models import Speciality


class Article(models.Model): 
    title = models.CharField('Название', max_length=100) 
    intro = models.CharField('Введение', max_length=250, null=True)
    content = models.TextField('Содержание')
    created_at = models.DateTimeField('Дата и время публикации', auto_now_add=True)
    image = models.ImageField('Фото', upload_to='articles', null=True)
    slug = models.SlugField('Слаг')
    specialities = models.ManyToManyField(verbose_name='Теги', to=Speciality, related_name='articles', null=True)

    class Meta: 
        verbose_name = 'Статья'
        verbose_name_plural = 'Статьи'

    def __str__(self) -> str: 
        return self.title
    
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
        super(Article, self).save(*args, **kwargs)

    def get_absolute_url(self) -> str: 
        return reverse('articles:article', args=[self.slug])