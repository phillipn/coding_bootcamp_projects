from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^process_money/(?P<setting>\w+)$', views.process_money)
]
