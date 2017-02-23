from flask_wtf import Form
from wtforms import StringField
from wtforms.validators import (DataRequired, Regexp, Email, Length, EqualTo)

class NewUserForm(Form):
    first_name = StringField(
        'First Name',
        validators = [
            DataRequired()
        ]
    )
    last_name = StringField(
        'Last Name',
        validators = [
            DataRequired()
        ]
    )
    email = StringField(
        'Email',
        validators = [
            DataRequired(),
            Email()
        ]
    )
