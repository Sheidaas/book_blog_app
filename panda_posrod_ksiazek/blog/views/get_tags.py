from rest_framework.views import APIView
from rest_framework.response import Response
from taggit.models import Tag
from blog.serializers.tag import TagSerializer
import json

class GetTags(APIView):
    def get(self, request, *args, **kwargs):
        tags = Tag.objects.all()
        serialized_tags = TagSerializer(tags, many=True)
        return Response(data=serialized_tags.data)
