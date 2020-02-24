from django import test
from django.core.exceptions import ValidationError

from blog.forms.validators.date_validator import validate_date


class TestDateValidator(test.TestCase):

    def test_is_properly_valid_string_len(self):
        valid_string = '21.01.2020'

        with self.assertRaises(ValidationError):
            validate_date('2000')

        try:
            validate_date(valid_string)
        except ValidationError:
            self.fail()

    def test_is_properly_checking_is_string_have_digits(self):
        valid_string = '21.01.2020'

        with self.assertRaises(ValidationError):
            validate_date('10.a.2020')
            validate_date('a.a.a')
            validate_date('5.a.a')

        try:
            validate_date(valid_string)
        except ValidationError:
            self.fail()

    def test_are_elements_can_be_date_number(self):
        valid_string = '21.01.2020'

        with self.assertRaises(ValidationError):
            validate_date('-10.10.2020')
            validate_date('999.4.1')
            validate_date('1050.0.1')

        try:
            validate_date(valid_string)
        except ValidationError:
            self.fail()

    def test_are_date_is_in_valid_date_system(self):
        valid_string = '21.01.2020'

        with self.assertRaises(ValidationError):
            validate_date('2000.10.2020')
            validate_date('2000.2000.1')
            validate_date('10.2000.20')

        try:
            validate_date(valid_string)
        except ValidationError:
            self.fail()
