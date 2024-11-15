
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.views import View
from doctors.models import Speciality, Doctor
from reviews.models import Review
from articles.models import Article
from ProZdorovye.settings import FEEDBACK_EMAIL
from .forms import RequestForm, QuestionForm
from .tasks import send_email_task
from .models import UserAgreementPDF


class MainView(View): 
    def get(self, request): 
        return redirect('landing:home')


class HomeView(View): 
    template_name = 'landing/home.html' 

    def get(self, request): 
        speclialities = Speciality.objects.all()
        reviews = Review.objects.all()
        doctors = Doctor.objects.all()
        articles = Article.objects.all()
        form = RequestForm()

        context = {
            'specialities': speclialities,
            'reviews': reviews,
            'doctors': doctors,
            'articles': articles,
            'form': form,
        }

        return render(request, self.template_name, context)
    

class SaveRequestView(View): 
    def post(self, request): 
        form: RequestForm = RequestForm(request.POST) 
        if form.is_valid(): 
            new_request = form.save() 
            
            subject = f'Контактные данные от {new_request.phone}'
            message = (
                f'Номер телефона: {new_request.phone}'
                f'\nИмя: {new_request.name}'
            )
            if new_request.email:
                message += f'\nE-mail: {new_request.email}'
            
            send_email_task.delay(subject=subject, message=message)

            return JsonResponse({'status': 'ok'})
        return JsonResponse({'status': 'error'})
    

class SaveQuestionView(View): 
    def post(self, request): 
        form = QuestionForm(request.POST) 
        if form.is_valid(): 
            new_question = form.save() 

            subject = f'Вопрос от {new_question.phone}'
            message = (
                f'Номер телефона: {new_question.phone}' 
                f'\nИмя: {new_question.name}'
            )
            if new_question.email:
                message += f'\nE-mail: {new_question.email}'
            if new_question.text: 
                message += f'\nСодержание: {new_question.text}'
            
            send_email_task.delay(subject=subject, message=message)

            return JsonResponse({'status': 'ok'})
        return JsonResponse({'status': 'error'})


class RequestSavedView(View): 
    template_name = 'landing/request_saved.html' 

    def get(self, request): 
        return render(request, self.template_name)
    

class ContactsView(View): 
    template_name = 'landing/contacts.html' 

    def get(self, request): 
        return render(request, self.template_name)
    

class RequestFormHtmlApi(View): 
    def get(self, request): 
        form = RequestForm()
        agreement_url = UserAgreementPDF.get_instance().file.url
        context = {
            'form': form, 
            'agreement_url': agreement_url,
        }
        print(agreement_url)
        form_html = render(request, 'landing/forms/request_form.html', context).content.decode('utf-8')
        return JsonResponse(form_html, safe=False)
    

class QuestionFormHtmlApi(View): 
    def get(self, request): 
        form = QuestionForm()
        agreement_url = UserAgreementPDF.get_instance().file.url
        context = {
            'form': form, 
            'agreement_url': agreement_url,
        }
        form_html = render(request, 'landing/forms/question_form.html', context).content.decode('utf-8')
        return JsonResponse(form_html, safe=False)
    

class MapView(View): 
    def get(self, request): 
        specialities = Speciality.objects.all()
        doctors = Doctor.objects.all()
        context = {
            'specialities': specialities,
            'doctors': doctors,
        }
        return render(request, 'landing/map.html', context)