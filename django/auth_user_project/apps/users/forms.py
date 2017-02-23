from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
import datetime

class UserCreateForm(UserCreationForm):
    dob = forms.DateField(required=True)
    admin_level = forms.IntegerField(min_value=1, max_value=10)

    class Meta:
        model = User
        fields = ("username", "password1", "password2")

    def clean_dob(self):
        dob = self.cleaned_data['dob']
        age = (datetime.date.today().year - dob.year)
        if age < 15:
            raise forms.ValidationError('Must be at least 15 years old to register')
        return dob
