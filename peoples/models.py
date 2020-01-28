from django.db import models
from django.utils import timezone
from categories.models import Category
from django.urls import reverse
from ckeditor_uploader.fields import RichTextUploadingField


class People(models.Model):
    name=models.CharField(max_length=100,verbose_name="ФИО")
    people_slug=models.CharField(max_length=100,verbose_name="Для ссылки")
    category=models.ForeignKey(BlogCategory,on_delete=models.CASCADE,related_name='cat1',verbose_name="ПодКатегория 1")
    description=models.TextField(verbose_name="Краткое содержание")
    content=RichTextUploadingField(blank=True, default='')
    posted=models.DateField(default=timezone.now,verbose_name="Опубликовано")
    views=models.IntegerField(default=0,verbose_name="Просмотры")
    index_image=models.ImageField(upload_to="peoples/list",verbose_name="Картинка в индекс")
    image=models.ImageField(blank=True,upload_to="peoples/list",verbose_name="Главная картинка")

    class Meta:
        ordering=["-posted"]
        verbose_name="человек"
        verbose_name_plural="люди"

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('blog_detail',kwargs={"pk":self.pk})
