"""
URL configuration for ProZdorovye project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static 
from django.conf import settings
from django.urls import re_path
from django.views.static import serve
from landing.views import MainView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('doctors/', include('doctors.urls', namespace='doctors')),
    path('services/', include('services.urls', namespace='services')),
    path('prices/', include('prices.urls', namespace='prices')),
    path('blog/', include('articles.urls', namespace='articles')),
    path('vacancies/', include('vacancies.urls', namespace='vacancies')),
    path('', include('landing.urls', namespace='landing')),
    path('', MainView.as_view()),
    re_path(r'^sitemap\.xml$', serve, {
        'document_root': settings.BASE_DIR,
        'path': 'sitemap.xml',
    }),
    re_path(r'^robots\.txt$', serve, {
        'document_root': settings.BASE_DIR,
        'path': 'robots.txt',
    }),
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


handler404 = 'landing.views.handler404'