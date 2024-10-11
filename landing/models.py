from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
import uuid
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile
import os


class Article(models.Model): 
    title = models.CharField('Название', max_length=100) 
    content = models.TextField('Содержание')
    created_at = models.DateTimeField('Дата и время публикации', auto_now_add=True)
    photo = models.ImageField('Фотография', upload_to='articles', null=True, blank=True)

    class Meta: 
        verbose_name = 'Статья'
        verbose_name_plural = 'Статьи'

    def __str__(self) -> str: 
        return self.title
    
    def save(self, *args, **kwargs):
        name = str(uuid.uuid1())
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
        super(Article, self).save(*args, **kwargs)


class Review(models.Model): 
    rate = models.SmallIntegerField('Оценка', validators=[
        MinValueValidator(1), 
        MaxValueValidator(5)
    ])
    username = models.CharField(max_length=50)
    content = models.TextField('Содержание')
    created_at = models.DateTimeField('Дата и время публикации')

    class Meta: 
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'

    def __str__(self) -> str: 
        return self.content[:20]
    

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