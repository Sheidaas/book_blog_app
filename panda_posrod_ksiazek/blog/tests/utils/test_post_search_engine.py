from django import test
from django.db.models import Q
from blog.utils.post_search_engine import PostSearchEngine
from blog.models.post import Post


class TestPostSearchEngine(test.TestCase):
    
    def setUp(self):
        post = Post()
        post.title = 'title'
        post.content = 'content'
        post.slug = 'the_slug'
        post.published_date = '2000-01-01'
        post.save()

    def test_get_commited_query(self):
        commited = True
        valid_query = [Q(**{'commited': commited})]
        self.assertEqual(valid_query, PostSearchEngine().get_commited_query(commited))

    def test_get_title_keywords_query(self):
        title_keywords = ['Hobbit', 'czyli']
        valid_argument_list = [Q(**{'title__icontains': 'Hobbit'}), Q(**{'title__icontains': 'czyli'})]
        self.assertEqual(PostSearchEngine.get_title_keywords_query(title_keywords), valid_argument_list)

    def test_get_authors_keywords_query(self):
        valid_query = [Q(**{'author__first_name__icontains': 'Maciej'}),
                       Q(**{'author__last_name__icontains': 'Wrzeszcz'})]
        self.assertEqual(valid_query, PostSearchEngine().get_authors_keywords_query(['Maciej Wrzeszcz']))

    def test_get_from_date_query(self):
        from_date = '2000-01-01'
        valid_argument_list = [Q(**{'published_date__gte': from_date})]
        self.assertEqual(valid_argument_list, PostSearchEngine.get_from_date_query(from_date))

    def test_get_to_date_query(self):
        from_date = '2000-01-01'
        valid_argument_list = [Q(**{'published_date__lte': from_date})]
        self.assertEqual(valid_argument_list, PostSearchEngine.get_to_date_query(from_date))

    def test_get_filter_options(self):
        valid_flag = {'latest': True, 'oldest': False}
        valid_argument_list = [
            Q(**{'title__icontains': 'qwerty'}),
            Q(**{'commited': True})
        ]

        _filter = {'latest': True, 'title_keywords': ['qwerty'], 'commited': True}
        self.assertEqual((valid_flag, valid_argument_list), PostSearchEngine().get_filter_options(_filter))

    def test_get_filtered_models_query(self):
        _filter = {
            'title_keywords': 'title',
            'from_date': '1999-01-01'
        }
        valid_post = Post.objects.get(pk=1)
        self.assertEqual(valid_post, PostSearchEngine().get_filtered_posts(_filter)[0])
