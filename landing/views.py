from django.shortcuts import render
from django.views import View
from doctors.models import Branch, Speciality, Doctor
from .models import Review, Article


class HomeView(View): 
    template_name = 'landing/main.html' 

    def get(self, request): 
        branches = Branch.objects.all()
        speclialities = Speciality.objects.all()
        reviews = Review.objects.all()
        doctors = Doctor.objects.all()
        articles = Article.objects.all()

        context = {
            'branches': branches,
            'specialities': speclialities,
            'reviews': reviews,
            'doctors': doctors,
            'articles': articles,
        }

        return render(request, self.template_name, context)
