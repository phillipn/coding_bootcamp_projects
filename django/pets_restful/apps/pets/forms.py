from django import forms

from . import models

class PetForm(forms.ModelForm):
    class Meta:
        model = models.Pet
        fields = ['name', 'description', 'price']
