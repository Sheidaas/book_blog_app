from django.contrib.auth.models import User, Group
from blog.templatetags.has_group import has_group
from django import test


class TestHasGroup(test.TestCase):

    def setUp(self):
        User.objects.create(
            username='sheida'
        )
        Group.objects.create(
            name='mod'
        )

    
    def test_has_group(self):
        user = User.objects.get(pk=1)
        self.assertFalse(has_group(user, 'mod'))

        group = Group.objects.get(name='mod')
        group.user_set.add(user)
        self.assertTrue(has_group(user, 'mod'))
