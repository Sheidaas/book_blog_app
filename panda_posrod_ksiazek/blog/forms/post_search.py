from django import forms
from taggit.forms import TagField, TagWidget

from .validators.date_validator import validate_date


# TODO: from_date oraz to_date mają mieć widget tempus dominus bootstrap 4
class PostSearch(forms.Form):
    title_keywords = forms.CharField(required=False)
    authors_keywords = forms.CharField(required=False)
    from_date = forms.CharField(validators=[validate_date, ], required=False)
    to_date = forms.CharField(validators=[validate_date, ], required=False)
    tags = TagField(required=False)
    sort_method = forms.CharField(required=False)
    commited = forms.BooleanField()

    def create_filter(self):
        _filter = {}
        if self.cleaned_data['title_keywords']:
            _filter['title_keywords'] = self._clean_data_for_filter(self.cleaned_data['title_keywords'])

        if self.cleaned_data['authors_keywords']:
            _filter['authors_keywords'] = self._clean_data_for_filter(self.cleaned_data['authors_keywords'])

        if self.cleaned_data['tags']:
            _filter['tags'] = self.cleaned_data['tags']

        if self.cleaned_data['from_date']:
            _filter['from_date'] = self._clean_date_for_filter(self.cleaned_data['from_date'])

        if self.cleaned_data['to_date']:
            _filter['to_date'] = self._clean_date_for_filter(self.cleaned_data['to_date'])

        if self.cleaned_data['commited']:
            _filter['commited'] = self.cleaned_data['commited']

        if self.cleaned_data['sort_method']:
            if self.cleaned_data['sort_method'] == 'latest':
                _filter['latest'] = self.cleaned_data['sort_method']
            elif self.cleaned_data['sort_method'] == 'oldest':
                _filter['oldest'] = self.cleaned_data['sort_method']

        return _filter

    @staticmethod
    def _clean_data_for_filter(value: str):
        return [string.strip(' ') for string in value.split(',')]

    @staticmethod
    def _clean_date_for_filter(value: str):
        splitted_date = value.split('.')
        elements_length = [len(element) for element in splitted_date]
        if elements_length == [4, 2, 2]:
            return str(splitted_date[0] + '-' + splitted_date[1] + '-' + splitted_date[2])
        else:
            return str(splitted_date[2] + '-' + splitted_date[1] + '-' + splitted_date[0])
