from rest_framework import serializers
from blog.models.post import Post
from blog.serializers.fields.string_list_field import StringListField


class PostSerializer(serializers.ModelSerializer):
    tags = StringListField()

    class Meta:
        model = Post
        fields = ('id', 'title', 'published_date', 'content', 'commited', 'slug', 'card_image', 'tags')