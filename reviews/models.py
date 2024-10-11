from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class Review(models.Model): 
    rate = models.SmallIntegerField('Оценка', validators=[
        MinValueValidator(1), 
        MaxValueValidator(5)
    ])
    content = models.TextField('Содержание')
    created_at = models.DateTimeField('Дата и время публикации')

    class Meta: 
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'

    def __str__(self) -> str: 
        return self.content[:20]