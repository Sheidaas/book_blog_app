"""
    Test for blog.views.get_posts.GetPosts(request)
"""
from django.test import TestCase
from rest_framework.test import APIRequestFactory
from blog.views.get_posts import GetPosts
from blog.models.post import Post
from blog.serializers.post import PostSerializer
import json


class TestGetPosts(TestCase):

    def setUp(self) -> None:
        """
            Creating APIRequestFactory objects as TestGetPosts field
            Creating post for tests
        """
        self.factory = APIRequestFactory()
        Post.objects.create(title='new post',
                            published_date='2000-01-01',
                            commited=True,
                            card_image='file_path')

    def test_post(self) -> None:

        """
            Check is post status code is 200
            Check is response data correct
        """

        title = 'new post'
        request = self.factory.post('/get_posts/',
                                    data=json.dumps({'title_keywords': title}),
                                    content_type='application/json')

        response = GetPosts().post(request)

        # Asserting is response correct
        self.assertEqual(response.status_code, 200)

        # Asserting is responded data correct
        valid_post = [{
            'id': 1,
            'title': title,
            'content': '',
            'commited': True,
            'slug': 'new-post',
            'hero_image': '/media/file_path',
            'tags': [],
        }]
        for key in valid_post[0]:
            self.assertEqual(valid_post[0][key], response.data[0][key])
