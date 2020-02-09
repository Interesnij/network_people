from django.conf.urls import url
from peoples.views import PeopleListView, PeopleDetailView


urlpatterns = [
    url(r'^(?P<slug>[\w\-]+)/$', PeopleListView.as_view()),
    url(r'^(?P<people_slug>[\w\-]+)/detail/$', PeopleDetailView.as_view(), name="people_detail"),
]
