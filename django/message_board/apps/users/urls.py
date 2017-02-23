from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^login/$', views.login, name='login'),
    url(r'^register$', views.register, name='register'),
    url(r'^logout$', views.logout, name='logout'),
    url(r'^dashboard$', views.dashboard, name='dashboard'),
    url(r'^users/edit/$', views.user_edit, name='user_edit'),
    url(r'^users/new/$', views.new, name='new'),
    url(r'^users/delete/(?P<id>\d+)$', views.delete, name='delete'),
    url(r'^users/edit/(?P<id>\d+)$', views.edit, name='edit'),
    url(r'^users/edit/(?P<id>\d+)/update_password$', views.update_password, name='update_password'),
    url(r'^users/edit/(?P<id>\d+)/update_user$', views.update_user, name='update_user'),
    url(r'^users/edit/(?P<id>\d+)/update_description$', views.update_description, name='update_description'),
    url(r'^users/show/(?P<id>\d+)$', views.show, name='show'),
    url(r'^posts/new/$', views.create_post, name='create_post'),
    url(r'^comments/new/$', views.create_comment, name='create_comment'),
]
