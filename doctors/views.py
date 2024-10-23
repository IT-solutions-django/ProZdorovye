from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from .models import Speciality, Doctor


class DoctorView(View): 
    template_name = 'doctors/doctor.html'

    def get(self, request, doctor_slug: str): 
        doctor = Doctor.objects.get(slug=doctor_slug)

        profession = ', '.join(
            speciality.profession.name 
            for speciality in doctor.specialities.all()
        ).lower().capitalize()

        context = {
            'doctor': doctor,
            'profession': profession
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
                'url': doctor.get_absolute_url(),
                'experience': doctor.hire_year,
                'categories': [s.name for s in doctor.specialities.all()], 
                'image': doctor.photo.url,
                'prodoctorov_profile': doctor.prodoctorov_profile,
            } 
            for doctor in Doctor.objects.all()
        ]
        return JsonResponse(doctors, safe=False)
