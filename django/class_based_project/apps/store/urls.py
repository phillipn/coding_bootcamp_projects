from django.conf.urls import url

from .views import ProductList, ProductDelete, ProductEdit

urlpatterns = [
    url(r'^$', ProductList.as_view(), name='index'),
    url(r'^(?P<id>\d+)/delete$', ProductDelete.as_view(), name='delete'),
    url(r'^(?P<id>\d+)/edit$', ProductEdit.as_view(), name='edit'),
]
