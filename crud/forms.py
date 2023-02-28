from django import forms
from .models import Users

class DateInput(forms.DateInput):
    input_type = 'date'

class UserForm(forms.ModelForm):
    class Meta:
        model = Users
        fields = '__all__'
        widgets = {
            'birthdate': DateInput()
        }