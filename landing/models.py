from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class Article(models.Model): 
    title = models.CharField('Название', max_length=100) 
    content = models.TextField('Содержание')
    created_at = models.DateTimeField('Дата и время публикации', auto_now_add=True)
    photo = models.ImageField('Фотография', upload_to='articles', null=True, blank=True)

    class Meta: 
        verbose_name = 'Статья'
        verbose_name_plural = 'Статьи'


class Review(models.Model): 
    rate = models.SmallIntegerField('Оценка', validators=[
        MinValueValidator(0), 
        MaxValueValidator(5)
    ])
    username = models.CharField(max_length=50)
    content = models.TextField('Содержание')
    created_at = models.DateTimeField('Дата и время публикации', auto_now_add=True)

    class Meta: 
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'
        