"""
    GetTags() view
"""
from rest_framework.response import Response
from rest_framework.views import APIView
from taggit.models import Tag

from blog.serializers.tag import TagSerializer


class GetTags(APIView):
    """

        GetTags is a view to get all tags from database

    """
    def get(self, request):
        """

            calling this method when request method is get

        """
        tags = Tag.objects.all()
        serialized_tags = TagSerializer(tags, many=True)
        return Response(data=serialized_tags.data)
