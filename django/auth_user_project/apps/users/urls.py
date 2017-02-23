from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.register, name='register'),
    url(r'^index/$', views.index, name='index'),
    url(r'^logout/$', views.logout_user, name='logout'),
]
