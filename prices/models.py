from django.db import models
from services.models import Speciality
from doctors.models import Doctor


class ServiceType(models.Model): 
    name = models.CharField('Название', max_length=50)
    price = models.DecimalField('Цена', decimal_places=2, max_digits=8)
    speciality = models.ForeignKey(verbose_name='Специализация', to=Speciality, on_delete=models.CASCADE, related_name='services')
    doctor = models.ForeignKey(verbose_name='Врач', to=Doctor, related_name='services', on_delete=models.CASCADE, null=True)
    duration = models.SmallIntegerField(verbose_name='Длительность', default=60)

    class Meta: 
        verbose_name = 'Тип услуги'
        verbose_name_plural = 'Типы услуг'
    
    def __str__(self) -> str: 
        return f'{self.speciality} | {self.name} {self.price}р'