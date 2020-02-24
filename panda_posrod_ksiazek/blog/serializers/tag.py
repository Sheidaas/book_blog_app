from rest_framework import serializers
from taggit.models import Tag


class TagSerializer(serializers.ModelSerializer):

    def to_representation(self, instance) -> list:
        return {
            'name': instance.name
        }

    class Meta:
        model = Tag
        fields = ('name',)
