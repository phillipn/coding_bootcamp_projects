from django import forms
from django.core.exceptions import ValidationError

from .models import User

class RegisterForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email']

    password = forms.CharField(min_length=8,max_length=100,widget=forms.PasswordInput)
    password_confirm = forms.CharField(min_length=8,max_length=100,widget=forms.PasswordInput)

    def clean(self):
        cleaned_data = super(RegisterForm, self).clean()
        password = cleaned_data.get("password")
        password_confirm = cleaned_data.get("password_confirm")

        if password != password_confirm:
            raise ValidationError("password and confirm_password does not match")
