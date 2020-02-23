from django.core.exceptions import ValidationError
from blog.models.post import Post


def slug_validator(slug):
    if Post.objects.filter(slug=slug).exists():
        raise ValidationError('Slug is not unique')