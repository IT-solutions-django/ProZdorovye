from django.shortcuts import render, redirect
from django.views import View
from doctors.models import Branch, Speciality, Doctor
from reviews.models import Review
from .models import Article
from .forms import RequestForm


class MainView(View): 
    def get(self, request): 
        return redirect('landing:home')


class HomeView(View): 
    template_name = 'landing/home.html' 

    def get(self, request): 
        branches = Branch.objects.all()
        speclialities = Speciality.objects.all()
        reviews = Review.objects.all()
        doctors = Doctor.objects.all()
        articles = Article.objects.all()
        form = RequestForm()

        context = {
            'branches': branches,
            'specialities': speclialities,
            'reviews': reviews,
            'doctors': doctors,
            'articles': articles,
            'form': form,
        }

        return render(request, self.template_name, context)
    
    def post(self, request): 
        form: RequestForm = RequestForm(request.POST) 
        if form.is_valid(): 
            new_request = form.save() 
            return redirect('landing:request_saved')
        return render(request, 'template_name.html', {'form': form})


class RequestSavedView(View): 
    template_name = 'landing/request_saved.html' 

    def get(self, request): 
        return render(request, self.template_name)
    

class ContactsView(View): 
    template_name = 'landing/contacts.html' 

    def get(self, request): 
        return render(request, self.template_name)