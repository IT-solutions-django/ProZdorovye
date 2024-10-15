from django.shortcuts import render
from django.views import View 
from .models import ServiceType


class PricesView(View): 
    template_name = 'prices/prices.html' 

    def get(self, request): 
        services = ServiceType.objects.all()
        context = {
            'services': services, 
        }
        return render(request, self.template_name, context)