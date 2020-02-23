from rest_framework.views import APIView
from rest_framework.response import Response
from blog.utils.post_search_engine import PostSearchEngine
from blog.forms.post_search import PostSearch
from blog.serializers.post import PostSerializer
import json

class GetPosts(APIView):

    def post(self, request, *args, **kwargs):
        dict_data = json.loads(request.body)
        dict_data['commited'] = True
        form = PostSearch(data=dict_data)
        if form.is_valid():
            posts = PostSearchEngine().get_filtered_posts(form.create_filter())
            serialized_posts = PostSerializer(posts, many=True)
            return Response(data=serialized_posts.data)
        print('not valid buddy')
        return Response()
        