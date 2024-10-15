from django.db import models
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile
import os


class ArticlePhoto(models.Model):
    image = models.ImageField('Изображение', upload_to='articles', null=True, blank=True)
    created_at = models.DateTimeField('Дата загрузки', auto_now_add=True)

    class Meta:
        verbose_name = 'Фото для статьи'
        verbose_name_plural = 'Фото для статей'

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
        super(ArticlePhoto, self).save(*args, **kwargs)


class Article(models.Model): 
    title = models.CharField('Название', max_length=100) 
    content = models.TextField('Содержание')
    created_at = models.DateTimeField('Дата и время публикации', auto_now_add=True)
    photos = models.ManyToManyField(ArticlePhoto, verbose_name='Фотографии', blank=True)
    slug = models.SlugField('Слаг')

    class Meta: 
        verbose_name = 'Статья'
        verbose_name_plural = 'Статьи'

    def __str__(self) -> str: 
        return self.title