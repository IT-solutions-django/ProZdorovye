from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from .models import Speciality, Doctor


class DoctorsView(View): 
    template_name = 'doctors/doctors.html'

    def get(self, request): 
        return render(request, self.template_name)


class SpecialitiesAPIView(View): 
    def get(self, request): 
        specialities = Speciality.objects.all()
        specialities = [speciality.name for speciality in specialities]
        return JsonResponse({
            'specialities': specialities
        })
    

class DoctorsAPIView(View): 
    def get(self, request): 
        doctors = [
            {
                'name': f'{doctor.first_name} {doctor.last_name} {doctor.patronymic}', 
                'categories': [s.name for s in doctor.specialities.all()], 
                'image': doctor.photo.url,
            } 
            for doctor in Doctor.objects.all()
        ]
        return JsonResponse({
            'doctors': doctors
        })
