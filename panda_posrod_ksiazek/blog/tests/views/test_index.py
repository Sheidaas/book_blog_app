from rest_framework.test import APIRequestFactory
from django.contrib.auth.models import AnonymousUser
from django import test
from blog.views.index import Index

class TestIndex(test.TestCase):

    def setUp(self):
        self.factory = APIRequestFactory()
    
    def test_get_context(self):
        request = self.factory.get('/')
        request.user = AnonymousUser()

        # Validing context sff
        valid_context = {
            'is_user_authenticated': False,
            'hottests_posts': [],
            'latest_posts': [],
        }

        self.assertEqual(valid_context, Index().get_context(request))
