from django import forms


class Login(forms.Form):
    username = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Nazwa uzytkownika'}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'Hasło'}))
