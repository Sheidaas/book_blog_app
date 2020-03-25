import json

from rest_framework.response import Response
from rest_framework.views import APIView

from blog.forms.post_search import PostSearch
from blog.serializers.post import PostSerializer
from blog.utils.post_search_engine import PostSearchEngine


class GetPosts(APIView):

    """
        GetPosts is a view to get posts with a filter
    """

    def post(self, request):

        """
            Called when request method is POST
        Args:
            request: Request
        Returns:
            Response

        """
        dict_data = self.prepare_data_to_form(request.body)
        form = PostSearch(data=dict_data)
        if form.is_valid():
            posts = PostSearchEngine().get_filtered_posts(form.create_filter())
            serialized_posts = PostSerializer(posts, many=True)
            return Response(data=serialized_posts.data)
        return Response(data='form is invalid')

    def prepare_data_to_form(self, raw_data):
        """

        Args:
            raw_data: request.body

        Returns:
            dict_data: dict

        """
        dict_data = json.loads(raw_data)
        dict_data['commited'] = True

        # Django Taggit TagField need a string
        # dict_data['tags'] have list of string
        try:
            if dict_data['tags']:
                tag_string = ''
                for index in range(len(dict_data['tags'])):
                    if index == len(dict_data['tags'])-1:
                        tag_string += dict_data['tags'][index]
                    else:
                        tag_string += dict_data['tags'][index] + ','
                dict_data['tags'] = tag_string
        except KeyError:
            pass
        finally:
            return dict_data
