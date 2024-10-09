from django.db import models


class Branch(models.Model): 
    name = models.CharField('Название', max_length=100)
    address = models.CharField('Адрес', max_length=100) 
    phone = models.CharField('Номер телефона', max_length=18)

    class Meta: 
        verbose_name = 'Филиал'
        verbose_name_plural = 'Филиалы'

    def __str__(self) -> str: 
        return self.address


class Speciality(models.Model): 
    name = models.CharField('Название', max_length=80)

    class Meta: 
        verbose_name = 'Специализация'
        verbose_name_plural = 'Специализации'

    def __str__(self) -> str: 
        return self.name


class ServiceType(models.Model): 
    name = models.CharField('Название', max_length=50)
    price = models.DecimalField('Цена', decimal_places=2, max_digits=8)
    speciality = models.ForeignKey(verbose_name='Специализация', to=Speciality, on_delete=models.CASCADE)

    class Meta: 
        verbose_name = 'Тип услуги'
        verbose_name_plural = 'Типы услуг'
    
    def __str__(self) -> str: 
        return f'{self.speciality} | {self.name} {self.price}р'


class Doctor(models.Model): 
    first_name = models.CharField('Имя', max_length=50)
    last_name = models.CharField('Фамилия', max_length=50)
    patronymic = models.CharField('Отчество', max_length=50, null=True, blank=True)
    phone = models.CharField('Телефон', max_length=20, unique=True, null=True, blank=True)
    email = models.EmailField('Электронная почта', unique=True, null=True, blank=True) 
    hire_year = models.SmallIntegerField('Год начала работы')
    experience = models.SmallIntegerField('Стаж', null=True)
    description = models.TextField('Описание', null=True, blank=True) 
    photo = models.ImageField('Фото', upload_to='doctors', null=True)
    branch = models.ForeignKey(verbose_name='Филиал', to=Branch, on_delete=models.CASCADE)
    specialities = models.ManyToManyField(verbose_name='Специализации', to=Speciality, related_name='doctors')

    class Meta: 
        verbose_name = 'Врач'
        verbose_name_plural = 'Врачи'

    def __str__(self) -> str: 
        return f'{self.first_name} {self.last_name} {self.patronymic if self.patronymic else ""}'