from peoples.models import People
from django.views.generic.list import ListView
from django.http import HttpResponse
from categories.models import Category
from django.views.generic.base import TemplateView


class PeopleListView(ListView):
	model=People
	template_name="people_index.html"
	paginate_by=9

	def get(self,request,*args,**kwargs):
		self.cat=Category.objects.get(slug=self.kwargs["slug"])
		return super(PeopleListView,self).get(request,*args,**kwargs)

	def get_context_data(self,**kwargs):
		context=super(PeopleListView,self).get_context_data(**kwargs)
		context["category"]=self.cat
		return context

    def get_queryset(self):
		people_list=People.objects.filter(category=self.cat).order_by("-posted")
		return people_list


class PeopleDetailView(TemplateView):
	template_name="people.html"

	def get(self,request,*args,**kwargs):
		self.people= Blog.objects.get(people_slug=self.kwargs["people_slug"])
		self.people.views += 1
		self.people.save()
        self.peoples=People.objects.filter(category=self.people.category)[0:6]
		return super(BlogDetailView,self).get(request,*args,**kwargs)

	def get_context_data(self,**kwargs):
		context=super(BlogDetailView,self).get_context_data(**kwargs)
		context["peoples"]=self.peoples
		return context
