from django.conf.urls import url, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    url('admin/', admin.site.urls),
    url(r'^$', include ('main.urls')),
    url(r'^categories/', include('categories.urls')),
    url(r'^people/', include('peoples.urls')),
    url(r'^about/', include('about.urls')),
    url(r'^policy/', include('policy.urls')),
    url(r'^news/', include('news.urls')),
]
