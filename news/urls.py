from django.conf.urls import url
from peoples.views import NewsListView, NewsDetailView


urlpatterns = [
    url(r'^$', NewsListView.as_view()),
    url(r'^(?P<new_slug>[\w\-]+)/$', NewsDetailView.as_view(), name="news_detail"),
]
