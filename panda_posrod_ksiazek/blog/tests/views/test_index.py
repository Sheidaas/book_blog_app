from django import test
from blog.forms.post_search import PostSearch


class TestIndexView(test.TestCase):

    def test_is_index_view_exist(self):
        path = ''
        response = self.client.get(path)

        # Is view up
        self.assertEqual(response.status_code, 200)
        # Is form PostSearch
        self.assertIsInstance(response.context['form'], PostSearch)

    def test_is_post_redirecting_to_post_search(self):
        path = ''
        response = self.client.post(path, {'menu_title_keywords': 'title'}, follow=False)
        self.assertEqual(response.status_code, 302)
        self.assertRedirects(response, '/articles/title/')