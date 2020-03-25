from django import forms
from taggit.forms import TagField

from .validators.date_validator import validate_date


class PostSearch(forms.Form):
    """

        Form using to validate incoming data from frontend to search posts

    """
    title_keywords = forms.CharField(required=False)
    slug = forms.CharField(required=False)
    authors_keywords = forms.CharField(required=False)
    from_date = forms.CharField(validators=[validate_date, ], required=False)
    to_date = forms.CharField(validators=[validate_date, ], required=False)
    tags = forms.CharField(required=False)
    sort_method = forms.CharField(required=False)
    commited = forms.BooleanField()

    def create_filter(self):
        """

            Create _filter dict for post search engine,
            use only if form is valid

            If _filter[key] exists, but is empty
            PostSearchEngine() will raise exception

            Returns: _filter

        """
        _filter = {}
        actions = {
            'title_keywords': self._clean_data_for_filter,
            'tags': self._clean_data_for_filter,
            'authors_keywords': self._clean_data_for_filter,
            'from_date': self._clean_date_for_filter,
            'to_date': self._clean_date_for_filter,

            # This means don't use a method but
            # assign variable to _filter[key]
            'commited': False,
            'slug': False,
        }
        for key in self.cleaned_data:
            if key in actions.keys() and self.cleaned_data[key]:
                if actions[key]:
                    _filter[key] = actions[key](self.cleaned_data[key])
                else:
                    _filter[key] = self.cleaned_data[key]

        return _filter

    @staticmethod
    def _clean_data_for_filter(value: str):
        return [string.strip(' ') for string in value.split(',')]

    @staticmethod
    def _clean_date_for_filter(value: str):
        if value:
            splitted_date = value.split('.')
            elements_length = [len(element) for element in splitted_date]
            if elements_length == [4, 2, 2]:
                return str(splitted_date[0] + '-' + splitted_date[1] + '-' + splitted_date[2])
            else:
                return str(splitted_date[2] + '-' + splitted_date[1] + '-' + splitted_date[0])
        return ''
