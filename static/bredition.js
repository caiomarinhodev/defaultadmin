function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.landcount = 0;

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 50;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 100;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 150;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 200;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
	// Add images to enlarges.
	document.getElementById("enlarge5token").innerHTML += '<img src="/static/images/train_icon.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge15token").innerHTML += '<img src="/static/images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge25token").innerHTML += '<img src="/static/images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge35token").innerHTML += '<img src="/static/images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge12token").innerHTML += '<img src="/static/images/electric_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge28token").innerHTML += '<img src="/static/images/water_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;Se uma "Companhia" é de propriedade, o aluguel é 4 vezes o valor mostrado nos dados.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;Se as duas Companhias são de propriedade, o aluguel é 10 vezes o valor mostrado nos dados.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Aluguel<span style="float: right;">$25.</span><br />Se 2 Ferrovias são de propriedade<span style="float: right;">50.</span><br />Se 3 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">100.</span><br />Se 4 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">200.</span></div>';
}

function luxurytax() {
	addAlert(player[turn].name + " pagou $100 por Taxa de Riqueza.");
	player[turn].pay(100, 0);

	$("#landed").show().text("Você desembarcou no imposto de luxo. Pagar US $ 100.");
}

function citytax() {
	addAlert(player[turn].name + " pagou US $ 200 pelo desembarque no City Tax.");
	player[turn].pay(200, 0);

	$("#landed").show().text("Você desembarcou no imposto municipal. Pague US $ 200.");
}

var square = [];

square[0] = new Square("INICIO", "RECOLHA SALÁRIO DE US $ 200 AO PASSAR.", "#FFFFFF");
square[1] = new Square("Avenida Sumaré", "$60", "#8B4513", 60, 3, 2, 10, 30, 90, 160, 250);
square[2] = new Square("Cofre", "SIGA AS INSTRUÇÕES NO CARTÃO SUPERIOR", "#FFFFFF");
square[3] = new Square("Praça da Sé", "$60", "#8B4513", 60, 3, 4, 20, 60, 180, 320, 450);
square[4] = new Square("Imposto de Renda", "Pague $200", "#FFFFFF");
square[5] = new Square("Estação de Metrô Maracanã", "$200", "#FFFFFF", 200, 1);
square[6] = new Square("Rua 25 de Março", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[7] = new Square("Sorte", "SIGA AS INSTRUÇÕES NO CARTÃO SUPERIOR", "#FFFFFF");
square[8] = new Square("Avenida São João", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[9] = new Square("Avenida Paulista", "$120", "#87CEEB", 120, 4, 8, 40, 100, 300, 450, 600);
square[10] = new Square("Apenas Visita", "", "#FFFFFF");
square[11] = new Square("Avenida Vieira Souto", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[12] = new Square("Companhia Elétrica", "$150", "#FFFFFF", 150, 2);
square[13] = new Square("Niterói", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[14] = new Square("Avenida Atlantica", "$160", "#FF0080", 160, 5, 12, 60, 180, 500, 700, 900);
square[15] = new Square("Estação de Metrô Carioca", "$200", "#FFFFFF", 200, 1);
square[16] = new Square("Avenida Presidente Juscelino Kubitschek", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[17] = new Square("Cofre", "SIGA AS INSTRUÇÕES NO CARTÃO SUPERIOR", "#FFFFFF");
square[18] = new Square("Avenida Engenheiro Luis Carlos Berrini", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[19] = new Square("Avenida Brigadeiro Faria Lima", "$200", "#FFA500", 200, 6, 16, 80, 220, 600, 800, 1000);
square[20] = new Square("Estacionamento", "", "#FFFFFF");
square[21] = new Square("Ipanema", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[22] = new Square("Sorte", "SIGA AS INSTRUÇÕES NO CARTÃO SUPERIOR", "#FFFFFF");
square[23] = new Square("Leblon", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[24] = new Square("Copacabana", "$240", "#FF0000", 240, 7, 20, 100, 300, 750, 925, 1100);
square[25] = new Square("Estação de Metrô Consolação", "$200", "#FFFFFF", 200, 1);
square[26] = new Square("Avenida Cidade Jardim", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[27] = new Square("Pacaembu", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[28] = new Square("Companhia de Distribuição de Agua", "$150", "#FFFFFF", 150, 2);
square[29] = new Square("Ibirapuera", "$280", "#FFFF00", 280, 8, 24, 120, 360, 850, 1025, 1200);
square[30] = new Square("Vá para Cadeira", "Vá diretamente para a cadeia. Não passe no Inicio. Não colete US $ 200.", "#FFFFFF");
square[31] = new Square("Barra da Tijuca", "$300", "#008000", 300, 9, 26, 130, 390, 900, 110, 1275);
square[32] = new Square("Jardim Botânico", "$300", "#008000", 300, 9, 26, 130, 390, 900, 110, 1275);
square[33] = new Square("Cofre", "SIGA AS INSTRUÇÕES NO CARTÃO SUPERIOR", "#FFFFFF");
square[34] = new Square("Lagoa Rodrigo de Freitas", "$320", "#008000", 320, 9, 28, 150, 450, 1000, 1200, 1400);
square[35] = new Square("Estação de Metrô Republica", "$200", "#FFFFFF", 200, 1);
square[36] = new Square("Sorte", "SIGA AS INSTRUÇÕES NO CARTÃO SUPERIOR", "#FFFFFF");
square[37] = new Square("Avenida Morumbi", "$350", "#0000FF", 350, 10, 35, 175, 500, 1100, 1300, 1500);
square[38] = new Square("Taxa de Riqueza", "Pague $100", "#FFFFFF");
square[39] = new Square("Rua Oscar Freire", "$400", "#0000FF", 400, 10, 50, 200, 600, 1400, 1700, 2000);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card("Sair da cadeia livre. Este cartão pode ser guardado até ser necessário ou vendido.", function(p) { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("Você ganhou o segundo prêmio em um concurso de beleza. Colete $ 10.", function() { addamount(10, 'Cofre');});
communityChestCards[2] = new Card("Com a venda de ações, você recebe US $ 50.", function() { addamount(50, 'Cofre');});
communityChestCards[3] = new Card("O seguro de vida amadurece. Colete $ 100.", function() { addamount(100, 'Cofre');});
communityChestCards[4] = new Card("Reembolso de imposto de renda. Colete US $ 20.", function() { addamount(20, 'Cofre');});
communityChestCards[5] = new Card("Fundo de férias amadurece. Receba $ 100.", function() { addamount(100, 'Cofre');});
communityChestCards[6] = new Card("Você herda US $ 100.", function() { addamount(100, 'Cofre');});
communityChestCards[7] = new Card("Receba uma taxa de consultoria de US $ 25.", function() { addamount(25, 'Cofre');});
communityChestCards[8] = new Card("Pagar taxas hospitalares de US $ 100.", function() { subtractamount(100, 'Cofre');});
communityChestCards[9] = new Card("Erro bancário a seu favor. Colete US $ 200.", function() { addamount(200, 'Cofre');});
communityChestCards[10] = new Card("Pague as propinas de US $ 50.", function() { subtractamount(50, 'Cofre');});
communityChestCards[11] = new Card("Honorários médicos. Pagar US $ 50.", function() { subtractamount(50, 'Cofre');});
communityChestCards[12] = new Card("É o teu aniversário. Colete $ 10 de cada jogador.", function() { collectfromeachplayer(10, 'Cofre');});
communityChestCards[13] = new Card("Avance para \"Inicio\" (Colete US $ 200).", function() { advance(0);});
communityChestCards[14] = new Card("Você é avaliado quanto a reparos na rua. US $ 40 por casa. 115 dólares por hotel.", function() { streetrepairs(40, 115);});
communityChestCards[15] = new Card("Vá para a cadeia. Vá diretamente para a cadeia. Não passe \"Inicio\". Não colete US $ 200.", function() { gotojail();});


chanceCards[0] = new Card("SAIR DA CADEIA LIVRE. Este cartão pode ser guardado até ser necessário ou negociado.", function(p) { p.chanceJailCard=true; updateOwned();});
chanceCards[1] = new Card("Faça reparos gerais em toda a sua propriedade. Para cada casa pague R $ 25. Para cada hotel, US $ 100.", function() { streetrepairs(25, 100);});
chanceCards[2] = new Card("Multa por excesso de velocidade $ 15.", function() { subtractamount(15, 'Sorte');});
chanceCards[3] = new Card("Você foi eleito presidente do conselho. Pague a cada jogador $ 50.", function() { payeachplayer(50, 'Sorte');});
chanceCards[4] = new Card("Volte três espaços.", function() { gobackthreespaces();});
chanceCards[5] = new Card("AVANCE PARA A COMPANHIA MAIS PRÓXIMO. SE NÃO POSSUIR, você pode comprá-lo no Banco. SE POSSUÍDO, jogue dados e pague ao proprietário um total de dez vezes a quantia lançada.", function() { advanceToNearestUtility();});
chanceCards[6] = new Card("Banco paga dividendo de US $ 50.", function() { addamount(50, 'Sorte');});
chanceCards[7] = new Card("AVANCE PARA A FERROVIA MAIS PRÓXIMO. Se NÃO POSSUIR, você pode comprá-lo no Banco. Se PROPRIETÁRIO, pague ao proprietário duas vezes o aluguel ao qual eles têm direito.", function() { advanceToNearestRailroad();});
chanceCards[8] = new Card("Pagar imposto de US $ 15.", function() { subtractamount(15, 'Sorte');});
chanceCards[9] = new Card("Faça uma viagem para Reading Rail Road. Se você passar pelo \"INICIO\", colete US $ 200.", function() { advance(5);});
chanceCards[10] = new Card("AVANCE para Boardwalk.", function() { advance(39);});
chanceCards[11] = new Card("AVANCE para Illinois Avenue. Se você passar pelo \"INICIO\", colete US $ 200.", function() { advance(24);});
chanceCards[12] = new Card("O seu empréstimo à construção amadurece. Colete US $ 150.", function() { addamount(150, 'Sorte');});
chanceCards[13] = new Card("AVANCE PARA A FERROVIA MAIS PRÓXIMO. Se NÃO POSSUIR, você pode comprá-lo no Banco. Se PROPRIETÁRIO, pague ao proprietário duas vezes o aluguel ao qual eles têm direito.", function() { advanceToNearestRailroad();});
chanceCards[14] = new Card("AVANCE para St. Charles Place. Se você passar pelo \"INICIO\", colete US $ 200.", function() { advance(11);});
chanceCards[15] = new Card("Vá para a cadeia. Vá diretamente para a cadeia. Não passe pelo \"INICIO\". Não colete US $ 200.", function() { gotojail();});
