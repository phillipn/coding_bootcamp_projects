from flask_wtf import Form
from wtforms import StringField, PasswordField, DateTimeField
from wtforms.validators import (DataRequired, Regexp, Email, Length, EqualTo)

class RegistrationForm(Form):
    email = StringField(
        'Email',
        validators=[
            DataRequired(),
            Email()
        ]
    )
    firstname = StringField(
        'First Name',
        validators=[
            DataRequired(),
            Regexp(
                r'^[a-zA-Z_]+$',
                message=("Letters only!")
            )]
    )
    lastname = StringField(
        'Last Name',
        validators=[
            DataRequired(),
            Regexp(
                r'^[a-zA-Z_]+$',
                message=("Letters only!")
            )]
    )
    password = PasswordField(
        'Password',
        validators=[
            DataRequired(),
            EqualTo('password_confirm', message='Passwords must match'),
            Regexp(
                r'^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$',
                message=("One uppercase and lowercase letter needed!")
            ),
            Length(min=8)
        ]
    )
    password_confirm = PasswordField(
        'Confirm Password',
        validators=[
            DataRequired(),
            Length(min=8)
        ]
    )
    birthday = DateTimeField(
        'Bday month/day/year',
        format='%m/%d/%Y',
        validators=[]
    )
