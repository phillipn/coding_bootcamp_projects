from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^(?P<color>\w*)$', views.show)
]
