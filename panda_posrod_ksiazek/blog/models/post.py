from django.contrib.auth.models import User
from django.db import models
from django.template.defaultfilters import slugify
from taggit.managers import TaggableManager


class Post(models.Model):
    card_image = models.ImageField(upload_to='hero_images/', blank=True)
    card_image_alt = models.CharField(max_length=20, blank=True)
    card_description = models.CharField(max_length=300, blank=True)
    author = models.ManyToManyField(User)
    title = models.CharField(max_length=40, blank=False)
    published_date = models.DateTimeField(blank=False)
    content = models.TextField()
    slug = models.SlugField(unique=True)
    tags = TaggableManager()
    commited = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def get_tags_display(self):
        return self.tags.values_list('name', flat=True)
