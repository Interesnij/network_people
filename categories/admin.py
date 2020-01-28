from django.contrib import admin
from categories.models import Category

class CategoryAdmin(admin.ModelAdmin):

    list_display = ['order','slug','image', 'name']
    list_filter = ['name']
    search_fields = ['name', 'posted']
    class Meta:
            model = Category

admin.site.register(Category,CategoryAdmin)
