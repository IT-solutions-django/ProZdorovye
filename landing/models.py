from django.db import models
import os
from django.db.models.signals import post_delete
from django.dispatch import receiver
    

class Request(models.Model): 
    name = models.CharField('Имя', max_length=100) 
    phone = models.CharField('Телефон', max_length=18) 
    email = models.EmailField('Email', null=True, blank=True)
    is_closed = models.BooleanField('Обработано', default=False)

    class Meta: 
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'

    def __str__(self) -> str: 
        return f'{self.is_closed} | {self.name}, {self.phone}'
    

class Question(models.Model): 
    name = models.CharField('Имя', max_length=100) 
    phone = models.CharField('Телефон', max_length=18) 
    email = models.EmailField('Email', null=True, blank=True)
    text = models.CharField('Текст', max_length=250, null=True, blank=True)
    is_closed = models.BooleanField('Обработано', default=False)

    class Meta: 
        verbose_name = 'Вопрос'
        verbose_name_plural = 'Вопросы'

    def __str__(self) -> str: 
        return f'{self.is_closed} | {self.name}, {self.phone}'
    

class UserAgreementPDF(models.Model): 
    file = models.FileField('Файл', upload_to='prices')

    class Meta: 
        verbose_name = 'Пользовательское соглашение'
        verbose_name_plural = 'Пользовательское соглашение'

    def save(self, *args, **kwargs):
        if self.pk:
            old_instance = UserAgreementPDF.objects.get(pk=self.pk)
            if old_instance.file and old_instance.file != self.file:
                if os.path.isfile(old_instance.file.path):
                    old_instance.file.delete(save=False)
        else: 
            old_instance = UserAgreementPDF.objects.first() 
            if old_instance and old_instance.file != self.file: 
                if os.path.isfile(old_instance.file.path):
                    old_instance.file.delete(save=False)

        if UserAgreementPDF.objects.count():
            self.pk = UserAgreementPDF.objects.first().pk
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        if self.file:
            self.file.delete(save=False)
        super().delete(*args, **kwargs)

    @classmethod
    def get_instance(cls) -> "UserAgreementPDF":
        instance = cls.objects.first()
        return instance
    
    def __str__(self) -> str: 
        return 'Пользовательское соглашение'
    

@receiver(post_delete, sender=UserAgreementPDF)
def delete_file_on_object_delete(sender, instance, **kwargs):
    if instance.file:
        instance.file.delete(save=False)