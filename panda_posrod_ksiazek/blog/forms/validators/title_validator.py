from django.core.exceptions import ValidationError

from blog.models.post import Post


def title_validator(title: str):
    """
        Validator is checking that post title is unique
    """
    if len(title) < 5:
        raise ValidationError('Title must be longer than 5 chars')
    elif len(title) > 50:
        raise ValidationError('Title must be shorter than 50 chars')

    if Post.objects.filter(title=title).exists():
        raise ValidationError('Title is already in use')
