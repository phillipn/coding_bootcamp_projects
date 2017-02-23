from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^create$', views.create, name='create'),
    url(r'^(?P<id>\d+)/delete$', views.delete, name='delete'),
    url(r'^(?P<id>\d+)/comment$', views.comment, name='comment'),
]
