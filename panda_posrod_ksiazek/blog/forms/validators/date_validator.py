from django.core.exceptions import ValidationError


def validate_date(string: str):
    # Splitting string
    splitted_string = string.split('.')

    # Checking is string have 3 parts
    if len(splitted_string) != 3:
        raise ValidationError('Invalid date %s' % string)

    # Checking are string's elements digits
    for element in splitted_string:
        try:
            int(element)
        except ValueError:
            raise ValidationError('Invalid date %s' % string)

    # Checking are elements can be date numbers
    for element in splitted_string:
        if len(element) == 1 or len(element) == 2:
            if not int(element) > 0 or not int(element) < 31:
                raise ValidationError('Invalid date %s' % string)
        elif len(element) == 4:
            if not int(element) > 1000 or not int(element) < 9999:
                raise ValidationError('Invalid date %s' % string)
    
    # Checking are what system date is written
    elements_lengths = [len(element) for element in splitted_string]
    if elements_lengths != [4, 2, 2] and elements_lengths != [2, 2, 4]:
        raise ValidationError('Invalid date %s' % string)
