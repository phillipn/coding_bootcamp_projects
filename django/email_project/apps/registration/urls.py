from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.form, name='form'),
    url(r'^index/$', views.index, name='index'),
    url(r'^(?P<id>\d+)/delete/$', views.delete, name='delete')
]
