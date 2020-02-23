from rest_framework.response import Response
from rest_framework.views import APIView
from taggit.models import Tag

from blog.serializers.tag import TagSerializer


class GetTags(APIView):

    def get(self, request):
        tags = Tag.objects.all()
        serialized_tags = TagSerializer(tags, many=True)
        return Response(data=serialized_tags.data)
