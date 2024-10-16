from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from .models import Speciality, Doctor


class DoctorView(View): 
    template_name = 'doctors/doctor.html'

    def get(self, request, doctor_id: int): 
        doctor = Doctor.objects.get(pk=doctor_id)
        context = {
            'doctor': doctor,
        }
        return render(request, self.template_name, context)


class DoctorsView(View): 
    template_name = 'doctors/doctors.html'

    def get(self, request): 
        return render(request, self.template_name)
    

class DoctorsAPIView(View): 
    def get(self, request): 
        doctors = [
            {
                'id': doctor.pk,
                'name': f'{doctor.first_name} {doctor.last_name} {doctor.patronymic}', 
                'role': ", ".join([s.name for s in doctor.specialities.all()]),
                'url': doctor.get_absolute_url(),
                'experience': doctor.hire_year,
                'categories': [s.name for s in doctor.specialities.all()], 
                'image': doctor.photo.url,
            } 
            for doctor in Doctor.objects.all()
        ]
        return JsonResponse(doctors, safe=False)
