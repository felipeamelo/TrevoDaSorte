from django.urls import path
from . import views

app_name = 'trevomilhoes'

urlpatterns = [

    path('sorteio/'                           , views.SorteioView.as_view() , name='sorteio'),
    path('premio/'                            , views.PremioView.as_view()  , name='premio'),
    path('api/v1/sorteio/'                    , views.SorteioList           , name='api_sorteio_list'),
    path('api/v1/premio/'                     , views.PremioList            , name='api_premio_list'),

]


#from django.conf.urls import include, url
#    url(r'^sorteio/$'            , views.SorteioView.as_view() , name='sorteio'),
#    url(r'^premio/$'             , views.PremioView.as_view()  , name='premio'),
#    url(r'^api_sorteio_list/$'   , views.SorteioList           , name='api_sorteio_list'),
#    url(r'^api_premio_list/$'    , views.PremioList            , name='api_premio_list'),


#from django.urls import path
#    path('sorteio/'                           , views.SorteioView.as_view() , name='sorteio'),
#    path('premio/'                            , views.PremioView.as_view()  , name='premio'),
#    path('api_sorteio_list/<int:qtde_reg>/'   , views.SorteioList           , name='api_sorteio_list'),
#    path('api_premio_list/'                   , views.PremioList            , name='api_premio_list'),

#from core.api.json_response import JSONDetailView, JSONListView
