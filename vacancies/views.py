from django.shortcuts import render, get_object_or_404
from django.views import View 
from landing.tasks import send_email_task
from django.http import JsonResponse
from .models import Vacancy
from .forms import VacancyReplyForm


class VacanciesView(View): 
    template_name = 'vacancies/vacancies.html'

    def get(self, request): 
        vacancies = Vacancy.objects.all()
        context = {
            'vacancies': vacancies,
        }
        return render(request, self.template_name, context)


class VacancyView(View): 
    template_name = 'vacancies/vacancy.html' 

    def get(self, request, vacancy_slug: str): 
        vacancy = get_object_or_404(Vacancy, slug=vacancy_slug)
        form = VacancyReplyForm()
        context = {
            'vacancy': vacancy,
            'form': form,
        }
        return render(request, self.template_name, context)
    

class SaveVacancyReply(View):
    def post(self, request): 
        form = VacancyReplyForm(request.POST, request.FILES) 
        if form.is_valid(): 
            new_reply = form.save() 

            subject = f'Отклик на вакансию от {new_reply.phone}'
            message = (
                f'Номер телефона: {new_reply.phone}' 
                f'\nИмя: {new_reply.first_name}'
                f'\nФамилия: {new_reply.last_name}'
            )

            email_data = {
                "subject": subject,
                "message": message,
            }

            if new_reply.resume:
                email_data["resume_path"] = new_reply.resume.path
            
            send_email_task.delay(**email_data)

            return JsonResponse({'status': 'ok'})
        return JsonResponse({
            'errors': form.errors
        })