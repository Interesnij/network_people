from django.conf.urls import url
from categories.views import CategoriesView


urlpatterns = [
    url(r'^$', CategoriesView.as_view()),
]
