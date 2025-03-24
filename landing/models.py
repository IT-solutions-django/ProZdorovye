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

    title = models.TextField(
         'Политика конфиденциальности', 
        help_text='Название вкладки в админ. панели',
        default='Политика конфиденциальности'
    )

    class Meta: 
        verbose_name = 'Политика конфиденциальности'
        verbose_name_plural = 'Политика конфиденциальности'

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
        return 'Политика конфиденциальности'
    

@receiver(post_delete, sender=UserAgreementPDF)
def delete_file_on_object_delete(sender, instance, **kwargs):
    if instance.file:
        instance.file.delete(save=False)


class LicensePage(models.Model): 
    file = models.FileField('Страница', upload_to='license/')

    class Meta: 
        verbose_name = 'Страница лицензии'
        verbose_name_plural = 'Страницы лицензии'


class ContactInfo(models.Model): 
    address = models.TextField('Почтовый адрес', )
    personal_questions_info = models.TextField('Приём граждан по личным вопросам', )

    title = models.TextField(
         'Контактная информация', 
        help_text='Название вкладки в админ. панели',
        default='Контактная информация'
    )

    class Meta: 
        verbose_name = 'Контактные данные'
        verbose_name_plural = 'Контактные данные'

    def save(self, *args, **kwargs):
        if self.__class__.objects.count():
            self.pk = self.__class__.objects.first().pk
        super().save(*args, **kwargs)

    @classmethod
    def get_instance(cls) -> "ContactInfo":
        instance, created = cls.objects.get_or_create(id=1)
        return instance
    
    def __str__(self) -> str: 
        return 'Контактная информация'
    

class FilialInfo(models.Model): 
    address = models.TextField('Адрес филиала')
    work_mode = models.TextField('Режим работы')
    phone = models.CharField('Номер телефона', max_length=18)
    solid_phone = models.CharField('Номер телефона (только цифры и "+")', max_length=11)

    contact_info = models.ForeignKey(verbose_name='Контактная информация', to=ContactInfo, on_delete=models.CASCADE, related_name='filials')

    class Meta: 
        verbose_name = 'Филиал'
        verbose_name_plural = 'Филиалы'
    

class JuridicalInfo(models.Model): 
    orgainzation_full_name = models.CharField('Полное наименование медицинской организации', max_length=120)
    address = models.CharField('Адрес юридического лица', max_length=200)
    ogrn = models.CharField('ОГРН', max_length=13)
    registered_authority_name = models.CharField('Наименование зарегистрировавшего органа', max_length=200)
    registering_date = models.CharField('Дата государственной регистрации', max_length=50)
    inn = models.CharField('ИНН', max_length=10)
    founders_info = models.TextField('Сведения об учредителях')
    license_info = models.TextField('Сведения о лицензии на осуществление медицинской деятельности')

    title = models.TextField(
         'Юридическая информация', 
        help_text='Название вкладки в админ. панели',
        default='Юридическая информация'
    )

    class Meta: 
        verbose_name = 'Юридическая информация'
        verbose_name_plural = 'Юридическая информация'

    @classmethod
    def get_instance(cls) -> "ContactInfo":
        instance, created = cls.objects.get_or_create(id=1)
        return instance
    
    def __str__(self) -> str: 
        return 'Контактная информация'
    

class ProcessingDataAgreement(models.Model): 
    file = models.FileField('Файл', upload_to='prices')

    title = models.TextField(
         'Согласие на обработку персональных данных', 
        help_text='Название вкладки в админ. панели',
        default='Согласие на обработку персональных данных'
    )

    class Meta: 
        verbose_name = 'Согласие на обработку персональных данных'
        verbose_name_plural = 'Согласие на обработку персональных данных'

    def save(self, *args, **kwargs):
        if self.pk:
            old_instance = ProcessingDataAgreement.objects.get(pk=self.pk)
            if old_instance.file and old_instance.file != self.file:
                if os.path.isfile(old_instance.file.path):
                    old_instance.file.delete(save=False)
        else: 
            old_instance = ProcessingDataAgreement.objects.first() 
            if old_instance and old_instance.file != self.file: 
                if os.path.isfile(old_instance.file.path):
                    old_instance.file.delete(save=False)

        if ProcessingDataAgreement.objects.count():
            self.pk = ProcessingDataAgreement.objects.first().pk
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        if self.file:
            self.file.delete(save=False)
        super().delete(*args, **kwargs)

    @classmethod
    def get_instance(cls) -> "ProcessingDataAgreement":
        instance = cls.objects.first()
        return instance
    
    def __str__(self) -> str: 
        return 'Согласие на обработку персональных данных'
    

@receiver(post_delete, sender=ProcessingDataAgreement)
def delete_file_on_object_delete(sender, instance, **kwargs):
    if instance.file:
        instance.file.delete(save=False)