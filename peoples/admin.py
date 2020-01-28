from django.contrib import admin
from news.models import People

class PeopleAdmin(admin.ModelAdmin):

    list_display = ['name', 'people_slug', 'posted', 'views']
    list_filter = ['name']
    search_fields = ['name', 'posted']
    class Meta:
            model = People

admin.site.register(People, PeopleAdmin)
