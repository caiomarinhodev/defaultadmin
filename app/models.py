from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models


# Create your models here.

class TimeStamped(models.Model):
    class Meta:
        abstract = True

    created_at = models.DateTimeField(auto_now_add=True)
    published_at = models.DateTimeField(auto_now=True)


class Player(TimeStamped):
    class Meta:
        verbose_name = u'Jogador'
        verbose_name_plural = u'Jogadores'

    user = models.OneToOneField(User, on_delete=models.CASCADE, unique=True)
    money = models.CharField(max_length=300, blank=True, null=True, default="10000.00")

    def __unicode__(self):
        return u'%s ' % self.user.username

    def __str__(self):
        return u'%s ' % self.user.username

    def add_credit(self, *args, **kwargs):
        if 'credit' in kwargs:
            self.money = "{:.2f}".format(float(self.money) + float(kwargs['credit']))
            self.save(*args, **kwargs)

    def add_debit(self, *args, **kwargs):
        if 'debit' in kwargs:
            self.money = "{:.2f}".format(float(self.money) - float(kwargs['debit']))
            self.save(*args, **kwargs)


class Concessionaria(Player):
    class Meta:
        verbose_name = u'Concessionaria'
        verbose_name_plural = u'Concessionarias'

    marca = models.CharField(max_length=300, blank=True, null=True)
    taxa_de_compra = models.CharField(max_length=300, blank=True, null=True)
    taxa_aluguel = models.CharField(max_length=300, blank=True, null=True)


class Garagem(TimeStamped):
    class Meta:
        verbose_name = u'Garagem'
        verbose_name_plural = u'Garagens'

    player = models.ForeignKey(Player, blank=True, null=True, on_delete=models.CASCADE)

    def __unicode__(self):
        return u'Garagem de %s ' % self.user.username

    def __str__(self):
        return u'Garagem de %s ' % self.user.username


class Caminhao(TimeStamped):
    class Meta:
        verbose_name = u'Caminhao'
        verbose_name_plural = u'Caminhoes'

    dono = models.ForeignKey(Player, blank=True, null=True, on_delete=models.CASCADE)
    garagem = models.ForeignKey(Garagem, blank=True, null=True, on_delete=models.CASCADE)
    preco = models.CharField(max_length=300, blank=True, null=True, default="100000.00")
    modelo = models.CharField(max_length=300, blank=True, null=True)
    marca = models.CharField(max_length=300, blank=True, null=True)
    velocidade_por_km = models.CharField(max_length=300, blank=True, null=True, default="60")
    limite_uso = models.CharField(max_length=300, blank=True, null=True, default="10")
    porcentagem_uso = models.CharField(max_length=300, blank=True, null=True, default="0.0")
    km_rodado = models.CharField(max_length=300, blank=True, null=True, default="0")

    def __unicode__(self):
        return u'%s ' % self.user.username

    def __str__(self):
        return u'%s ' % self.user.username


class Manutencao(TimeStamped):
    caminhao = models.ForeignKey(Caminhao, blank=True, null=True, on_delete=models.CASCADE)
    valor = models.CharField(max_length=300, blank=True, null=True, default="0.00")


class Motorista(TimeStamped):
    class Meta:
        verbose_name = u'Motorista'
        verbose_name_plural = u'Motoristas'

    empregador = models.ForeignKey(Player, blank=True, null=True, on_delete=models.CASCADE)
    salario = models.CharField(max_length=300, blank=True, null=True, default="1000.00")
    nome = models.CharField(max_length=300, blank=True, null=True, default="Jose")
    sobrenome = models.CharField(max_length=300, blank=True, null=True, default="Silva")
    disponibilidade = models.BooleanField(blank=True, null=True, default=True)


class ContratoMotorista(TimeStamped):
    class Meta:
        verbose_name = u'Contrato de Motorista'
        verbose_name_plural = u'Contratos de Motoristas'

    player = models.ForeignKey(Player, blank=True, null=True, on_delete=models.CASCADE)
    motorista = models.ForeignKey(Motorista, blank=True, null=True, on_delete=models.CASCADE)
    custo_anual = models.CharField(max_length=300, blank=True, null=True, default="0.00")
    custo_mensal = models.CharField(max_length=300, blank=True, null=True, default="0.00")
    taxa_desconto_salario = models.CharField(max_length=300, blank=True, null=True, default="25")


class Empresa(TimeStamped):
    class Meta:
        verbose_name = u'Empresa'
        verbose_name_plural = u'Empresas'

    ramo = models.CharField(max_length=300, blank=True, null=True)
    nome = models.CharField(max_length=300, blank=True, null=True)


class Entrega(TimeStamped):
    class Meta:
        verbose_name = u'Entrega'
        verbose_name_plural = u'Entregas'

    destino = models.CharField(max_length=300, blank=True, null=True)
    lat_destino = models.CharField(max_length=300, blank=True, null=True)
    lng_destino = models.CharField(max_length=300, blank=True, null=True)
    player = None
    empresa = None
    caminhao = None
    custo_total = models.CharField(max_length=300, blank=True, null=True)
    gasolina_total = models.CharField(max_length=300, blank=True, null=True)
    taxas = models.CharField(max_length=300, blank=True, null=True)
    inicio = models.CharField(max_length=300, blank=True, null=True)
    fim = models.CharField(max_length=300, blank=True, null=True)
