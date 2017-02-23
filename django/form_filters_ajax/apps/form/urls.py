from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^(?P<page>\d*)$', views.form, name='form'),
    url(r'^filter/$', views.filter, name='filter'),
]
