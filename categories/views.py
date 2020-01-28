from django.shortcuts import render
from django.views.generic.base import TemplateView


class CategoriesView(TemplateView):
    template_name="categories.html"
