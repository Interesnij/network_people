from django.shortcuts import render
from django.views.generic.base import TemplateView


class PolicyView(TemplateView):
    template_name="policy.html"
