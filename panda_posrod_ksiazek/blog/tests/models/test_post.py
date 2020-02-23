from django import test
from blog.models.post import Post



class TestPostModel(test.TestCase):

    def setUp(self):
        Post.objects.create(
            title='Hobbit',
            published_date='2000-01-01',
            content='content',
            slug='',
        )
        Post.objects.all()[0].tags.add('fantasy', 'tolkien')

    def test_is_model_saved(self):
        testing_post = Post.objects.all()[0]
        self.assertEqual(testing_post.title, 'Hobbit')
        self.assertEqual(testing_post.slug, 'hobbit')
        self.assertEqual(testing_post.tags.all()[1].name, 'tolkien')