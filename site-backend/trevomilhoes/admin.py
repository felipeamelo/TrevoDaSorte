from django.contrib import admin
from .models import Sorteio, Premio

class ItemInLine(admin.TabularInline):
	model = Premio

class MenuAdmin(admin.ModelAdmin):
	list_display = ['numero_concurso']
	inlines = [ItemInLine,]

admin.site.register(Sorteio,MenuAdmin)