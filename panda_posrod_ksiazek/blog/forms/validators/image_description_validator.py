from django.core.exceptions import ValidationError


def image_description_validator(image_description: str):
    """
        Checking is image description validate
    """
    if len(image_description) < 3:
        raise ValidationError('Image description must be longer than 3 chars')
    elif len(image_description) > 50:
        raise ValidationError('Image description must be shorten than 50 chars')
