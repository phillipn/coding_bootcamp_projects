from django.conf.urls import url, include

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^create/$', views.create, name='create'),
    url(r'^delete/(?P<id>\d+)$', views.delete, name='delete'),
    url(r'^add_content/$', views.add_content, name='add_content'),
    url(r'^partial/$', views.partial, name='partial'),
]
