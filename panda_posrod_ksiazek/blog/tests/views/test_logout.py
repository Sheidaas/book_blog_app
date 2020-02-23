from django import test
from django.contrib.auth.models import User
from django.contrib.auth import get_user


class TestLogout(test.TestCase):

    def setUp(self):
        User.objects.create_user(username='sheida', password='wrzeszcz1')

    def test_logout_working(self):
        # First login a client
        client = test.Client()
        login = client.login(username='sheida', password='wrzeszcz1')
        self.assertTrue(login)

        response = client.post('/logout/', follow=True)
        self.assertRedirects(response, '/')
        self.assertFalse(response.context['user'].is_authenticated)
