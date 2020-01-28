from django.views.generic.base import ContextMixin
from django.conf import settings
from categories.models import Category


class CategoryListMixin(ContextMixin):

	def get_context_data(self,**kwargs):
		context=super(CategoryListMixin,self).get_context_data(**kwargs)
		context["current_url"]=self.request.path
		context["categories"]=Category.objects.only("pk")
		return context
