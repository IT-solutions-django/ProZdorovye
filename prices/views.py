from django.http import JsonResponse
from django.shortcuts import render
from django.views import View 
from .models import ServiceType, PricePDF
from django.contrib.postgres.search import TrigramSimilarity



class PricesView(View): 
    template_name = 'prices/prices.html' 

    def get(self, request): 
        services = ServiceType.objects.all()
        price_file = PricePDF.get_instance()
        context = {
            'services': services, 
            'price_file': price_file,
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
            } for service in ServiceType.objects.select_related('speciality', 'doctor').all()
        ]
        return JsonResponse(services, safe=False)
    

class ServiceSearchView(View): 
    def get(self, request): 
        query = request.GET.get('query')
        if not query: 
            services = ServiceType.objects.all()
        else:
            services = ServiceType.objects.annotate(
                similarity=TrigramSimilarity('name', query)
            ).filter(similarity__gt=0.1).order_by('-similarity') 

        context = {
            'query': query,
            'services': services, 
        }

        return render(request, 'prices/search_results.html', context)