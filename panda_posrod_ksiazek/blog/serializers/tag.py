"""
    TagSerializer
"""
from rest_framework import serializers
from taggit.models import Tag


class TagSerializer(serializers.ModelSerializer):
    """
        Serializer using to serialize tags
    """

    def to_representation(self, instance: Tag):
        """
            Using to present tag model
        """
        return {
            'name': instance.name
        }

    class Meta:
        """
            Meta class
        """
        model = Tag
        fields = ('name',)
