from rest_framework import serializers


class StringListField(serializers.ListField):
    child = serializers.CharField()

    def to_representation(self, data):
        return [tag for tag in data.values_list(flat=True)]
