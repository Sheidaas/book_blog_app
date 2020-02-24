"""
    Serializer for Post model
"""
from rest_framework import serializers

from blog.models.post import Post
from blog.serializers.fields.string_list_field import StringListField


class PostSerializer(serializers.ModelSerializer):
    """
        Serializer Post model
    """
    tags = StringListField()

    def to_representation(self, instance: Post):
        """

        Args:
            instance: Post object

        Returns:
            dict with Post model variables

        """
        return {
            'id': instance.id,
            'title': instance.title,
            'published_date': instance.published_date,
            'content': instance.content,
            'commited': instance.commited,
            'slug': instance.slug,
            'card_image': instance.card_image.url,
            'tags': [tag for tag in instance.tags.all()]
        }

    class Meta:
        model = Post
        fields = ('id', 'title', 'published_date', 'content', 'commited', 'slug', 'card_image', 'tags')
