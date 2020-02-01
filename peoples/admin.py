from django.contrib import admin
from peoples.models import People, PeoplesBanner

class PeopleAdmin(admin.ModelAdmin):

    list_display = ['name', 'people_slug', 'posted', 'views']
    list_filter = ['name']
    search_fields = ['name', 'posted']
    class Meta:
            model = People

admin.site.register(People, PeopleAdmin)
admin.site.register(PeoplesBanner)
