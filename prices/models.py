from django.db import models
import os
from django.db.models.signals import post_delete
from django.dispatch import receiver
from services.models import Speciality
from doctors.models import Doctor


class ServiceType(models.Model): 
    doctor = models.ForeignKey(verbose_name='Врач', to=Doctor, related_name='services', on_delete=models.CASCADE, null=True)
    name = models.CharField('Название', max_length=200)
    speciality = models.ForeignKey(verbose_name='Специализация', to=Speciality, on_delete=models.CASCADE, related_name='services')
    info = models.CharField('Дополнительная информация', max_length=200, null=True, blank=True)
    price = models.CharField('Цена', max_length=50)
    booking_link = models.CharField('Ссылка на запись', null=True, blank=True)
    is_displayed = models.BooleanField('Отображается в общем списке', default=True)

    class Meta: 
        verbose_name = 'Тип услуги'
        verbose_name_plural = 'Типы услуг'
    
    def __str__(self) -> str: 
        return f'{self.speciality} | {self.name} {self.price}р'
    

class PricePDF(models.Model): 
    file = models.FileField('Прайс-лист', upload_to='prices')

    class Meta: 
        verbose_name = 'Прайс-лист'
        verbose_name_plural = 'Прайс-лист'

    def save(self, *args, **kwargs):
        if self.pk:
            old_instance = PricePDF.objects.get(pk=self.pk)
            if old_instance.file and old_instance.file != self.file:
                if os.path.isfile(old_instance.file.path):
                    old_instance.file.delete(save=False)
        else: 
            old_instance = PricePDF.objects.first() 
            if old_instance and old_instance.file != self.file: 
                if os.path.isfile(old_instance.file.path):
                    old_instance.file.delete(save=False)

        if PricePDF.objects.count():
            self.pk = PricePDF.objects.first().pk
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        if self.file:
            self.file.delete(save=False)
        super().delete(*args, **kwargs)

    @classmethod
    def get_instance(cls) -> "PricePDF":
        instance = cls.objects.first()
        return instance
    
    def __str__(self) -> str: 
        return 'Прайс-лист'
    

@receiver(post_delete, sender=PricePDF)
def delete_file_on_object_delete(sender, instance, **kwargs):
    if instance.file:
        instance.file.delete(save=False)