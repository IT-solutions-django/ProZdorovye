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

    def __str__(self) -> str: 
        return self.title


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
    opened = models.BooleanField('Открыта', default=True)

    class Meta: 
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'

    def __str__(self) -> str: 
        return f'{self.opened} | {self.name}, {self.phone}'