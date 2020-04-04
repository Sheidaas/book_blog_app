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
            'title': str(instance.title),
            'image_alt': instance.card_image_alt,
            'card_description': instance.card_description,
            'published_date': str(instance.published_date),
            'content': str(instance.content),
            'commited': instance.commited,
            'slug': str(instance.slug),
            'hero_image': instance.card_image.url,
            'tags': [str(tag.name) for tag in instance.tags.all()]
        }

    class Meta:
        """
            Meta class
        """
        model = Post
        fields = ('id', 'title', 'published_date', 'content', 'commited', 'slug', 'card_image', 'tags')
