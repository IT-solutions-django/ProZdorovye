from django.db import models
from services.models import Speciality
from doctors.models import Doctor


class ServiceType(models.Model): 
    doctor = models.ForeignKey(verbose_name='Врач', to=Doctor, related_name='services', on_delete=models.CASCADE, null=True)
    name = models.CharField('Название', max_length=200)
    speciality = models.ForeignKey(verbose_name='Специализация', to=Speciality, on_delete=models.CASCADE, related_name='services')
    info = models.CharField('Дополнительная информация', max_length=200, null=True, blank=True)
    price = models.CharField('Цена', max_length=50)
    is_displayed = models.BooleanField('Отображается в общем списке', default=True)

    class Meta: 
        verbose_name = 'Тип услуги'
        verbose_name_plural = 'Типы услуг'
    
    def __str__(self) -> str: 
        return f'{self.speciality} | {self.name} {self.price}р'