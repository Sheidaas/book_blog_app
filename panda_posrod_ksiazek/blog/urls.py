from django.urls import path

from .views.get_posts import GetPosts
from .views.get_tags import GetTags
from .views.index import Index
from .views.create_post import CreatePost

urlpatterns = [
    path('', Index.as_view(), name='index'),
    path('get_posts/', GetPosts.as_view(), name='get_posts'),
    path('get_tags/', GetTags.as_view(), name='get_tags'),
    path('create_post/', CreatePost.as_view(), name='create_post'),
]
