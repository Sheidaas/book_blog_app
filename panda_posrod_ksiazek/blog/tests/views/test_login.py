from django import test
from django.contrib.auth.models import User


class TestLogin(test.TestCase):
    
    def setUp(self):
        user = User.objects.create(
            username='sheida'
        )
        user.set_password('wrzeszcz1')
        user.save()


    def test_form_valid(self):
        url = '/login/'
        response = self.client.post(url, follow=True,
                                         data={'username': 'sheida',
                                               'password': 'wrzeszcz1'})
        self.assertRedirects(response, '/')
        self.assertTrue(response.context['user'].is_authenticated)