from django.http import JsonResponse
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
    

class PricesAPIView(View): 
    def get(self, request): 
        services = [
            {
                'id': service.pk,
                'name': service.name, 
                'direction': service.speciality.name,
                'info': service.info,
                'price': service.price, 
                'doctor': f'{service.doctor.last_name} {service.doctor.first_name} {service.doctor.patronymic}', 
                'is_displayed': service.is_displayed,
            } 
            for service in ServiceType.objects.all()
        ]
        return JsonResponse(services, safe=False)