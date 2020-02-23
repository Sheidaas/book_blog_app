from django.urls import path

from .views.get_posts import GetPosts
from .views.get_tags import GetTags
from .views.index import Index

urlpatterns = [
    path('', Index.as_view(), name='index'),
    path('get_posts/', GetPosts.as_view(), name='get_posts'),
    path('get_tags/', GetTags.as_view(), name='get_tags'),
]
