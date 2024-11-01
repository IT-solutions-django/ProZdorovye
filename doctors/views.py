from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from datetime import datetime
from .models import Speciality, Doctor


class DoctorView(View): 
    template_name = 'doctors/doctor.html'

    def get(self, request, doctor_slug: str): 
        doctor = Doctor.objects.prefetch_related('specialities__profession').get(slug=doctor_slug)
        doctor.experience = datetime.now().year - doctor.hire_year

        profession_parts = [s.profession.name for s in doctor.specialities.all()]
        profession = ', '.join([profession_parts[0]] + profession_parts[1:])

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
                'name': f'{doctor.last_name} {doctor.first_name} {doctor.patronymic}', 
                'url': doctor.get_absolute_url(),
                'experience': doctor.hire_year,
                'categories': [s.name for s in doctor.specialities.all()], 
                'image': doctor.photo.url if doctor.photo else None,
                'prodoctorov_profile': doctor.prodoctorov_profile,
            } 
            for doctor in Doctor.objects.all()
        ]
        return JsonResponse(doctors, safe=False)
