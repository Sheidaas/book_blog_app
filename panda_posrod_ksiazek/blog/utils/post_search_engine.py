from blog.models.post import Post
from django.db.models import Q
from functools import reduce
from operator import and_


class PostSearchEngine:

    @staticmethod
    def get_commited_query(commited):
        return [Q(**{'commited': commited})]

    @staticmethod
    def get_title_keywords_query(title_keywords):
        return [Q(**{'title__icontains': key}) for key in title_keywords]

    @staticmethod
    def get_authors_keywords_query(authors_keywords):
        argument_list = []
        for full_name in authors_keywords:
            splitted_full_name = full_name.split(' ')
            if len(splitted_full_name) == 1:
                argument_list.append(Q(**{'author__first_name__icontains': splitted_full_name[0]}))
            else:
                argument_list.append(Q(**{'author__first_name__icontains': splitted_full_name[0]}))
                argument_list.append(Q(**{'author__last_name__icontains': splitted_full_name[1]}))
        return argument_list

    @staticmethod
    def get_tags_keywords_query(tags_keywords):
        return [Q(**{'tags__name__in': keyword}) for keyword in tags_keywords]

    @staticmethod
    def get_from_date_query(from_date):
        return [Q(**{'published_date__gte': from_date})]

    @staticmethod
    def get_to_date_query(to_date):
        return [Q(**{'published_date__lte': to_date})]

    def get_filter_options(self, _filter):
        actions = {
            'commited': self.get_commited_query,
            'title_keywords': self.get_title_keywords_query,
            'authors': self.get_authors_keywords_query,
            'tags': self.get_tags_keywords_query,
            'from_date': self.get_from_date_query,
            'to_date': self.get_to_date_query,
        }
        flags = {
            'latest': False,
            'oldest': False,
        }
        argument_list = []

        if _filter:
            for key in _filter:
                if key in flags.keys():
                    flags[key] = True
                else:
                    argument_list += actions[key](_filter[key])
        return (flags, argument_list) 
            


    def get_filtered_posts(self, _filter, max_posts=20):
        flags_actions = {
            'latest': '-published_date',
            'oldest': 'published_date'
        }
        flags, argument_list = self.get_filter_options(_filter)
        
        if not argument_list:
            return Post.objects.none()

        for key in flags:
            if flags[key]:
                return Post.objects.filter(reduce(and_, argument_list)).order_by(flags_actions[key])[:max_posts]

        if argument_list:   
            return Post.objects.filter(reduce(and_, argument_list))[:max_posts]

        
