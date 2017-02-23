from django.shortcuts import render, redirect
from django.views.generic import View, UpdateView
from django.core.urlresolvers import reverse_lazy
from django.contrib import messages
from .forms import ProductForm
from .models import Product

class ProductList(View):
    def get(self, request, *args, **kwargs):
        products = Product.objects.all()
        template_name = 'store/index.html'
        form = ProductForm()
        return render(request, 'store/index.html', {'form': form, 'products': products})

    def post(self, request, *args, **kwargs):
        form = ProductForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('products:index')
        else:
            products = Product.objects.all()
            return render(request, 'store/index.html', {'form': form, 'products': products})

class ProductDelete(View):
    def get(self, request, *args, **kwargs):
        return redirect('products:index')
    def post(self, request, *args, **kwargs):
        id = kwargs['id']
        Product.objects.get(id=id).delete()
        return redirect('products:index')

class ProductEdit(UpdateView):
    form_class = ProductForm
    model = Product
    template_name = 'store/edit.html'
