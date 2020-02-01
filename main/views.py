from django.views.generic.base import TemplateView
from generic.mixins import CategoryListMixin
from main.models import MediumMagicImage, MainBanner


class MainPageView(TemplateView, CategoryListMixin):
	template_name = "main/mainpage.html"

	def get_context_data(self,**kwargs):
		context = super(MainPageView,self).get_context_data(**kwargs)
		context["medium_magic"] = MediumMagicImage.objects.last()
		context["banner"] = MainBanner.objects.last()
		return context
