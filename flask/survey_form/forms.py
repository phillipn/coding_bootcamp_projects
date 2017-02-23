from flask_wtf import Form
from wtforms import StringField, PasswordField, SelectField
from wtforms.validators import (DataRequired, Regexp, ValidationError, Email,
                               Length, EqualTo)

class SurveyForm(Form):
    name = StringField(
        'Name',
        validators=[
            DataRequired(),
            Regexp(
                r'^[a-zA-Z0-9_]+$',
                message=("Username should be one word, letters, "
                         "numbers, and underscores only.")
            )
        ])
    location = StringField(
        'Dojo Location',
        validators=[
            DataRequired()
        ])
    language = SelectField(
        'Language',
        choices = [(None, 'Choose Language'), ('Ruby', 'Ruby'), ('Python', 'Python'), ('JS', 'JS')],
        validators=[]
        )
    comment = StringField(
        'Comment',
        validators=[
            Length(max=120)
        ])
