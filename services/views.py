from django.shortcuts import render
from django.views import View 
from doctors.models import Speciality


class ServicesView(View): 
    template_name = 'services/services.html'

    def get(self, request, speciality_slug: str): 
        speciality = Speciality.objects.get(slug=speciality_slug)
        specialities = Speciality.objects.all().exclude(pk=speciality.pk)
        context = {
            'speciality': speciality, 
            'rest_specialities': specialities,
        }
        return render(request, self.template_name, context)
