from django.core.exceptions import ValidationError


def post_card_description_validator(post_card_description: str):
    """
        Checking is image description validate
    """
    if len(post_card_description) < 20:
        raise ValidationError('Post card description must be longer than 20 chars')
    elif len(post_card_description) > 300:
        raise ValidationError('Post card description must be shorten than 300 chars')
