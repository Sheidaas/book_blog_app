from blog.models.post import Post
from django import test


class TestPostSearchView(test.TestCase):

    def setUp(self):
        Post.objects.create(
            title='title',
            content='content',
            slug='the_slug',
            published_date='2000-01-01',
            commited='True',
        )


    def test_is_post_search_view_exist(self):
        path = '/articles/'
        response = self.client.get(path)
        self.assertEqual(response.status_code, 200)

    def test_form_valid(self):
        path = '/articles/'
        data = {'title_keywords': 'title'}
        response = self.client.post(path, data)
        self.assertTrue(response.context['query'])
