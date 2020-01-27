from django.views.generic.base import TemplateView


class MainPageView(TemplateView):
	template_name="main/mainpage2.html"

	def get_context_data(self,**kwargs):
		context=super(MainPageView,self).get_context_data(**kwargs)
		return context
