from django.shortcuts import render
from django.views import View


class HomeView(View): 
    template_name = 'landing/main.html' 

    def get(self, request): 
        return render(request, self.template_name)
