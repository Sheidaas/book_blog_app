from django import forms
from taggit.forms import TagWidget
from tempus_dominus.widgets import DateTimePicker

from blog.models.post import Post
from .validators.date_validator import validate_date
from .validators.slug_validator import slug_validator


# TODO: published_date ma mieć widget tempus dominus bootstrap 4
class PostCreator(forms.ModelForm):
    published_date = forms.DateTimeField(validators=[validate_date, ],
                                         widget=DateTimePicker(attrs={'class': 'input-div-field'},
                                                               options={'format': 'DD.MM.YYYY, HH:mm',
                                                                        'locale': 'pl'}))

    class Meta:
        model = Post
        fields = ('title', 'content', 'tags', 'commited', 'slug', 'hero_image')
        widgets = {
            'title': forms.TextInput(attrs={'placeholder': 'Tytuł',
                                            'class': 'input-div-field',
                                            'onchange': 'title_input_on_change(this)'}),
            'content': forms.Textarea(),
            'tags': TagWidget(attrs={'placeholder': 'Tagi',
                                     'class': 'input-div-field'}),
            'slug': forms.HiddenInput()
        }
        validators = {
            'slug': [slug_validator, ]
        }
