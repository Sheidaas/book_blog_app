from django import forms

from blog.models.post import Post


class PostCreator(forms.ModelForm):

    """
        This class validate data for create post
    """

    class Meta:
        """
            Meta class for create post
        """
        model = Post
        fields = ('title', 'content', 'tags', 'commited', 'slug', 'hero_image')
