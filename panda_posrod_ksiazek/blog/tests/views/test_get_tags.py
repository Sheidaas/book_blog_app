"""
    Tests for blog.views.get_tags.GetTag()
"""
import json
from django.test import TestCase
from rest_framework.test import APIRequestFactory
from blog.views.get_tags import GetTags
from taggit.models import Tag


class TestGetTags(TestCase):
    """

    Tests for GetTags

    """

    def setUp(self) -> None:
        """

        Creating request factory as class field,
        Creating some tags also

        Returns -> None

        """
        self.factory = APIRequestFactory()

        Tag.objects.create(name='Lord')
        Tag.objects.create(name='Vader')

    def test_get(self) -> None:
        """

        Testing is GetTags().get(request) up
         and is GetTags().get(request) responding correct data

        Returns -> None

        """
        # Checking is view responding
        request = self.factory.get('/get_tags/')
        response = GetTags().get(request)
        self.assertEqual(response.status_code, 200)

        # Checking is responded context correct
        all_tags = Tag.objects.all()
        responded_tags = response.data
        for index in range(len(all_tags)):
            self.assertEqual(all_tags[index].name, responded_tags[index]['name'])



