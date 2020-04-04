import json

from PIL import Image
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from blog.serializers.post import PostSerializer
from blog.forms.post_creator import PostCreator


class CreatePost(APIView):
    """
        Index view avaible in '/' path
    """
    def post(self, request, *args, **kwargs):
        """
            Calling when request method is post
        """
        data = self.prepare_data(request)
        print(data)
        form = PostCreator(data=data, files={'hero_image': data['hero_image']})
        if form.is_valid():
            post = form.save()
            content = {'redirect_to': post.slug}
            return Response(content, status=status.HTTP_201_CREATED)
        content = {'errors': form.errors}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    def prepare_data(self, request):
        """

        Args:
            request: request

        Returns:
            clean data

        """
        data = {}
        for field in request.data:
            if request.data[field]:
                data[field] = request.data[field]
        data['user_id'] = 1
        return data
