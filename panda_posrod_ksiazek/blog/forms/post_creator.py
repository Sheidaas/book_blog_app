from django import forms

from blog.forms.validators.title_validator import title_validator
from blog.forms.validators.image_description_validator import image_description_validator
from blog.forms.validators.post_card_description_validator import post_card_description_validator
from blog.models.post import Post
from taggit.forms import TagField


class PostCreator(forms.Form):

    """
        This class validate data for create post
    """
    post_id = forms.IntegerField(required=False)
    user_id = forms.IntegerField(required=True)
    hero_image = forms.ImageField(required=True)
    tags = TagField(required=True)
    image_alt = forms.CharField(required=True, validators=[image_description_validator, ])
    description = forms.CharField(required=True, validators=[post_card_description_validator, ])
    title = forms.CharField(required=True, validators=[title_validator, ])
    context = forms.CharField(required=True)
    commited = forms.BooleanField()

    def save(self):
        """
            Saving post
            Returns: created or modified post model
        """
        post = None
        if self.cleaned_data['post_id']:
            post = Post.objects.get(pk=self.cleaned_data['post_id'])
        else:
            post = Post()

        post.card_image = self.cleaned_data['hero_image']
        post.card_image_alt = self.cleaned_data['image_alt']
        post.card_description = self.cleaned_data['description']
        post.title = self.cleaned_data['title']
        post.content = self.cleaned_data['context']
        post.commited = self.cleaned_data['commited']
        post.published_date = '2000-01-01'
        post.slug = ''
        post.save()
        for tag in self.cleaned_data['tags']:
            post.tags.add(tag)
        post.save()
        return post