import datetime
from django.db import models
from django.utils import timezone

# Create your models here.
class Sorteio(models.Model):
    numero_concurso     = models.CharField('Numero do Concurso',max_length=10)
    data_do_sorteio     = models.DateTimeField('Data do Sorteio')
    valor_dos_premios   = models.DecimalField('Valor para Prêmios',max_digits=20,decimal_places=2)
    valor_prx_acumulado = models.DecimalField('Valor do próximo acumulado',max_digits=20,decimal_places=2)
    apostas_registradas = models.IntegerField('Numero de apostas registradas',default=0)
    numero_01           = models.IntegerField('Número 01',null=True, blank=True)
    numero_02           = models.IntegerField('Número 02',null=True, blank=True)
    numero_03           = models.IntegerField('Número 03',null=True, blank=True)
    numero_04           = models.IntegerField('Número 04',null=True, blank=True)
    numero_05           = models.IntegerField('Número 05',null=True, blank=True)
    trevo_01            = models.IntegerField('Trevo 01',null=True, blank=True)
    trevo_02            = models.IntegerField('Trevo 02',null=True, blank=True)

    def __str__(self):
        return self.numero_concurso

class Premio(models.Model):
    ORD_PREMIOS     = (('01','1º Prêmio'),
                       ('02','2º Prêmio'),
                       ('03','3º Prêmio'),
                       ('04','4º Prêmio'),
                       ('05','5º Prêmio'),
                       ('06','6º Prêmio'),
                       ('07','7º Prêmio'),
                       ('08','8º Prêmio'),
                       ('09','9º Prêmio'),
                       ('10','10º Prêmio'),
                       ('11','11º Prêmio'),
                       ('12','12º Prêmio'),
                       ('13','13º Prêmio'),)
    numero_concurso = models.ForeignKey(Sorteio, on_delete=models.CASCADE)
    ord_premio      = models.CharField('Prêmios',max_length=2,choices=ORD_PREMIOS)
    vlr_premio      = models.DecimalField('Valor do Prêmio',max_digits=20,decimal_places=2)
    qtd_vencedores  = models.IntegerField('Números de Vencedores',null=True, blank=False)

    def __str__(self):
        return self.ord_premio

class CorsMiddleware(object):
    def process_response(self, req, resp):
        response["Access-Control-Allow-Origin"] = "*"
        return response