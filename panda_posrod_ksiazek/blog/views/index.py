from rest_framework.views import APIView
from rest_framework.response import Response
from blog.models.post import Post
from blog.serializers.post import PostSerializer
from blog.utils.post_search_engine import PostSearchEngine


class Index(APIView):
    
    def get(self, request, *args, **kwargs):
        context = self.get_context(request)
        return Response(data=context)
    
    def get_context(self, request):
        hottest_posts = PostSearchEngine().get_filtered_posts({'commited': True}, max_posts=4)
        serialized_hottest_posts = PostSerializer(hottest_posts, many=True)

        latest_post = PostSearchEngine().get_filtered_posts({'latest': True, 'commited': True}, max_posts=5)
        serialized_latest_posts = PostSerializer(latest_post, many=True)

        return {
            'is_user_authenticated': request.user.is_authenticated,
            'hottests_posts': serialized_hottest_posts.data,
            'latest_posts': serialized_latest_posts.data
        }
