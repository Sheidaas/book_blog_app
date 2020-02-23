from rest_framework.routers import DefaultRouter
from .views.index import Index
from .views.get_posts import GetPosts
from .views.get_tags import GetTags
from django.urls import path

urlpatterns = [
    path('', Index.as_view(), name='index'),
    path('get_posts/', GetPosts.as_view(), name='get_posts'),
    path('get_tags/', GetTags.as_view(), name='get_tags'),
    #path('login/', Login.as_view(), name='login'),
    #path('logout/', Logout.as_view(), name='logout'),
    #path('tools/create_post/', PostCreator.as_view(), name='create_post'),
    #path('tools/saved_post/', PostSaved.as_view(), name='post_saved'),
    #path('article/<slug:slug>', PostDetail.as_view(), name='post_detail'),
    #url(r'^articles/$', PostSearch.as_view(), name='post_search'),
    #url(r'^articles/(?P<menu_title_keywords>\w+)/$', PostSearch.as_view(), name='post_search_with_title_keywords'),
    #path('ajax/is_title_unique/', is_title_unique, name='ajax_is_title_unique'),
    #path('ajax/get_slug/', get_slug, name='ajax_get_slug')
]
