from rest_framework.response import Response
from rest_framework.views import APIView

from blog.serializers.post import PostSerializer
from blog.utils.post_search_engine import PostSearchEngine


class Searcher(APIView):

    def get(self, request):
        latest_posts = PostSearchEngine().get_filtered_posts({'latest': True})
        serialized_latest_posts = PostSerializer(latest_posts, many=True)

        return Response(data=serialized_latest_posts.data)
