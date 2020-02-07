from django.contrib import admin
from frends.models import Frend


class FrendAdmin(admin.ModelAdmin):

    list_display = ['name', 'frend_slug', 'posted', 'views']
    list_filter = ['name']
    search_fields = ['name', 'posted']
    class Meta:
            model = Frend

admin.site.register(Frend, FrendAdmin)
