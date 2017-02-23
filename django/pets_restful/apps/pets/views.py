from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import get_object_or_404

from .models import Pet
from .forms import PetForm

def index(request):
    pets = Pet.objects.all()
    return render(request, 'pets/index.html', {'pets': pets})

def new(request):
    form = PetForm()
    return render(request, 'pets/new.html', {'form': form})

def create(request):
    if request.method == 'POST':
        form = PetForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Pet has been added")
        else:
            messages.error(request, "Pet needs all fields to be filled in")
    return redirect('pets:index')

def show(request, id):
    # ALTERNATIVE TO THE TRY EXCEPT BLOCKS BELOW.
    pet = get_object_or_404(Pet, id=id)
    return render(request, 'pets/show.html', {'pet': pet})

def delete(request, id):
    try:
        pet = Pet.objects.get(id=id).delete()
        messages.success(request, 'Pet deleted')
    except ObjectDoesNotExist:
        messages.error(request, 'Pet does not exist')
    return redirect('pets:index')


def edit(request, id):
    try:
        pet = Pet.objects.get(id=id)
    except ObjectDoesNotExist:
        messages.error(request, 'Pet does not exist')
        return redirect('pets:index')
    else:
        form = PetForm(instance=pet)
        return render(request, 'pets/new.html', {'form': form})

def update(request, id):
    if request.method == 'POST':
        try:
            pet = Pet.objects.get(id=id)
        except ObjectDoesNotExist:
            messages.error(request, 'Pet does not exist')
        else:
            form = PetForm(instance=pet, data=data.POST)
            if form.is_valid():
                form.save()
                messages.success(request, 'Pet created')
            else:
                messages.error(request, "Pet needs all fields to be filled in")
    return redirect('pets:index')
