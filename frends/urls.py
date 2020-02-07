from django.conf.urls import url
from peoples.views import FrendListView, FrendDetailView


urlpatterns = [
    url(r'^(?P<slug>[\w\-]+)/$', FrendListView.as_view()),
    url(r'^(?P<frend_slug>[\w\-]+)/$', FrendDetailView.as_view(), name="frend_detail"),
]
