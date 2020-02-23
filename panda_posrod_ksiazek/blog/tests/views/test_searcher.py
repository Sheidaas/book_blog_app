from rest_framework.test import APIRequestFactory
from django.test import TestCase
from blog.views.searcher import Searcher


class TestSearcher(TestCase):

    def setUp(self):
        self.factory = APIRequestFactory()

    def test_get(self):
        request = self.factory('/searcher/')
        response = Searcher().get(request)
        self.assertEqual(response.status_code, 200)
