from django.views import generic
from .models import Sorteio
from .models import Premio

from django.core import serializers
from django.http import HttpResponse

def SorteioList(request):
    #------------------------------------------------------------
    #Busca valor do parametro
    #Caso variável não exista, defina valor 2
    #------------------------------------------------------------
    if 'limit' in request.GET:
        nLimit = request.GET['limit']
        #------------------------------------------------------------
        #Remove espaço inicial e fincal caso exista
        #------------------------------------------------------------
        nLimit = nLimit.strip()
    else:
        nLimit = '2'

    #------------------------------------------------------------
    #Faz tratamento para que variável seja do tipo Int()
    #Caso variável sem conteúdo ou conteúdo não numerico, defina valor 2
    #------------------------------------------------------------
    if nLimit.isnumeric():
        nLimit = int(nLimit)
    else:
        nLimit = 2

    #------------------------------------------------------------
    #Utilizar (-) para listar em ordem decrescente
    #Utilizar [:nLimit] para listar apenas os ultimos X registros. Qtde passado por parametro na URL 
    #------------------------------------------------------------
    queryset = Sorteio.objects.all().order_by('-numero_concurso')[:nLimit]
    queryset = serializers.serialize('json',queryset)
    return HttpResponse(queryset,content_type="application/json")

def PremioList(request):
    queryset = Premio.objects.all()
    queryset = serializers.serialize('json',queryset)
    return HttpResponse(queryset,content_type="application/json")

# Create your views here.
class SorteioView(generic.ListView):
    model = Sorteio
    template_name = 'trevomilhoes/sorteio_list.html'
    context_object_name = 'all_sorteio_list'
    queryset = Sorteio.objects.all()

# Create your views here.
class PremioView(generic.ListView):
    model = Premio
    template_name = 'trevomilhoes/premio_list.html'
    context_object_name = 'all_premio_list'
    queryset = Premio.objects.all()
