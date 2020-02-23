from django import test
from blog.forms.post_search import PostSearch


class TestPostSearch(test.TestCase):

    def test_post_search_form(self):
        data = {
            'title_keywords': '',
            'authors_keywords': '',
            'from_date': '',
            'to_date': ''
        }
        # Creating empty form
        post_search_form = PostSearch(data=data)

        # Checking is empty form valid
        self.assertTrue(post_search_form.is_valid())

        # Creating invalid form
        data['from_date'] = '2000'
        post_search_form = PostSearch(data=data)

        # Checking is form valid with invalid date
        self.assertFalse(post_search_form.is_valid())

    def test_create_filter(self):
        data = {
            'title_keywords': '',
            'authors_keywords': '',
            'from_date': '',
            'to_date': ''
        }
        post_search_form = PostSearch(data=data)
        post_search_form.is_valid()
        _filter = post_search_form.create_filter()
        # Checking is _filter empty
        self.assertFalse(_filter)

        data = {
            'title_keywords': 'Harry, Potter',
            'authors_keywords': 'J. K. Rowling',
            'from_date': '01.01.1990',
            'to_date': '01.01.2000'
        }
        post_search_form = PostSearch(data=data)
        self.assertTrue(post_search_form.is_valid())
        _filter = post_search_form.create_filter()
        # Checking is _filter empty
        self.assertTrue(_filter)
        self.assertEqual(_filter['title_keywords'], ['Harry', 'Potter'])
        self.assertEqual(_filter['authors_keywords'], ['J. K. Rowling'])
        self.assertEqual(_filter['from_date'], '1990-01-01')
        self.assertEqual(_filter['to_date'], '2000-01-01')

    def test_clean_data_for_filter(self):
        title_keywords = 'Hobbit, to, tam'
        valid_cleaned_values = ['Hobbit', 'to', 'tam']

        post_search_form = PostSearch()
        cleaned_values = post_search_form._clean_data_for_filter(title_keywords)
        self.assertEqual(cleaned_values, valid_cleaned_values)

    def test_clean_date_for_filter(self):
        eu_date_format = '26.01.2020'
        usa_date_format = '2020.01.26'
        valid_date_format_for_filter = '2020-01-26'

        self.assertEqual(valid_date_format_for_filter, PostSearch()._clean_date_for_filter(eu_date_format))
        self.assertEqual(valid_date_format_for_filter, PostSearch()._clean_date_for_filter(usa_date_format))