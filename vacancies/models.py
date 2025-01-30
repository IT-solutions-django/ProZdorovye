from django.db import models
from django.urls import reverse


class Vacancy(models.Model): 
    title = models.CharField('Название', max_length=120) 
    preamble = models.TextField('Преамбула') 
    duties = models.TextField('Обязанности') 
    requirements = models.TextField('Требования') 
    conditions = models.TextField('Условия') 
    ending = models.TextField('Окончание') 
    created_at = models.DateTimeField('Дата и время публикации', auto_now_add=True)
    slug = models.SlugField('Слаг', max_length=500)

    class Meta: 
        verbose_name = 'Вакансия'
        verbose_name_plural = 'Вакансии'

    def __str__(self):
        return f'{self.title} ({self.created_at})'
    
    def get_absolute_url(self) -> str: 
        return reverse('vacancies:vacancy', args=[self.slug])



class VacancyReply(models.Model): 
    last_name = models.CharField('Фамилия', max_length=50) 
    first_name = models.CharField('Имя', max_length=50) 
    phone = models.CharField('Телефон', max_length=18) 
    resume = models.FileField('Резюме', upload_to='vacancies/replies/', null=True, blank=True)
    is_closed = models.BooleanField('Обработано', default=False)

    class Meta: 
        verbose_name = 'Отклик на вакансию'
        verbose_name_plural = 'Отклики'

    def __str__(self) -> str: 
        return f'{self.is_closed} | {self.last_name}, {self.phone}'