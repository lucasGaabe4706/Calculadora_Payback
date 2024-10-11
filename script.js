//Escala de funcionamento
let diasSemana, horasDiarias;

//INVESTIMENTO INICIAL
let materialInvestimento, maoDeObraInvestimento, estacaoInvestimento, softwareInvestimento;
let resultadoTotalInvestimentoInicial;

function calcularTotalInvestimento() {
  resultadoTotalInvestimentoInicial = parseFloat(materialInvestimento + maoDeObraInvestimento + estacaoInvestimento + softwareInvestimento);
}

//OPERAÇÃO
let taxaOcupacao, capacidadeMediaBateria, potenciaMediaRecarga;
let resultadoEnergiaDeOperacao;
let kwhTC;
let resultadoCustoMensalEnergia;
let resultadoRecargaPorMes;

function calcularRecargaMensal() {
  resultadoRecargaPorMes = parseInt(horasMensais / (capacidadeMediaBateria / potenciaMediaRecarga));
  resultadoEnergiaDeOperacao = parseInt(resultadoRecargaPorMes * capacidadeMediaBateria);
  resultadoCustoMensalEnergia = parseFloat(resultadoEnergiaDeOperacao * kwhTC);
}

//CUSTO MENSAL
let aluguelCM, internetCM, plataformaCM;
let resultadoTotalCustoMensal;
function custoMensal() {
  resultadoTotalCustoMensal = parseFloat(aluguelCM + internetCM + plataformaCM + resultadoCustoMensalEnergia);
}

//FATURAMENTO MENSAL
let resultadoTaxasIniciaisFaturamentoMensal;
let taxaInicialVV
let resultadoEnergiaFaturamentoMensal;
let kwhVV;
let resultadoTotalBrutoFaturamentoMensal;
let resultadoTaxasTotaisFaturamentoMensal;
let impostoTC, plataformaTC;
let resultadoTotalLiquidoFaturamentoMensal;
function faturamentoMensal() {
  resultadoTaxasIniciaisFaturamentoMensal = parseFloat(taxaInicialVV * resultadoRecargaPorMes);
  resultadoEnergiaFaturamentoMensal = parseFloat(kwhVV * resultadoEnergiaDeOperacao);
  resultadoTotalBrutoFaturamentoMensal = parseFloat(resultadoTaxasIniciaisFaturamentoMensal + resultadoEnergiaFaturamentoMensal);
  resultadoTaxasTotaisFaturamentoMensal = parseFloat((impostoTC + plataformaTC) * resultadoTotalBrutoFaturamentoMensal) * -1;
  resultadoTotalLiquidoFaturamentoMensal = parseFloat(resultadoTotalBrutoFaturamentoMensal + resultadoTaxasTotaisFaturamentoMensal);
}

//PAYBACK
let resultadoLucroMensalPayback;
let resultadoRetornoMensalPayback
let resultadoLucroLiquidoAnual;
let resultadoPayback;

function paybackResultados() {
  resultadoLucroMensalPayback = parseFloat(resultadoTotalLiquidoFaturamentoMensal - resultadoTotalCustoMensal) ;
  resultadoRetornoMensalPayback = parseFloat(((resultadoLucroMensalPayback * 100) / resultadoTotalInvestimentoInicial) / 100);
  resultadoLucroLiquidoAnual = parseFloat(resultadoLucroMensalPayback * 12);
  resultadoPayback = parseInt(1 / resultadoRetornoMensalPayback);

  const anos = Math.floor(resultadoPayback / 12);
  const meses = resultadoPayback % 12;

  resultadoPayback = `${anos}  anos e ${meses} meses`;
}

function efetuarCalculos() {

  calcularTotalInvestimento();
  //DEBUG
  console.log("Variáveis calcularRecargaMensal(): ", "materialInvestimento: ", materialInvestimento, "maoDeObraInvestimento: ", maoDeObraInvestimento, "estacaoInvestimento: ", estacaoInvestimento, "softwareInvestimento: ", softwareInvestimento);
  console.log("materialInvestimento: ", materialInvestimento, "+", "maoDeObraInvestimento: ", maoDeObraInvestimento, " + estacaoInvestimento: ", estacaoInvestimento, "+ softwareInvestimento: ", softwareInvestimento, "=", resultadoTotalInvestimentoInicial);

  calcularRecargaMensal();
  //DEBUG
  console.log("Variáveis calcularRecargaMensal(): ", "taxaOcupacao: ", taxaOcupacao, "capacidadeMediaBateria: ", capacidadeMediaBateria, "potenciaMediaRecarga: ", potenciaMediaRecarga, "resultadoEnergiaDeOperacao: ", resultadoEnergiaDeOperacao, "kwhTC: ", kwhTC, "resultadoCustoMensalEnergia", resultadoCustoMensalEnergia, "resultadoRecargaPorMes", resultadoRecargaPorMes)
  console.log("Formulas: ", "horasMensais: ", horasMensais, "/", "(capacidadeMediaBateria: ", capacidadeMediaBateria, "/", "potenciaMediaRecarga: ", potenciaMediaRecarga, ")", "= resultadoRecargaPorMes: ", resultadoRecargaPorMes);
  console.log("resultadoRecargaPorMes: ", resultadoRecargaPorMes, "*", "capacidadeMediaBateria", capacidadeMediaBateria, "=", "resultadoEnergiaDeOperacao: ", resultadoEnergiaDeOperacao);
  console.log("resultadoEnergiaDeOperacao: ", resultadoEnergiaDeOperacao, "*", "kwhTC: ", kwhTC, "=", "resultadoCustoMensalEnergia: ", resultadoCustoMensalEnergia);

  custoMensal(); +
    //DEBUG
    console.log("Variáveis custoMensal(): ", "aluguelCM: ", aluguelCM, "internetCM: ", internetCM, "plataformaCM: ", plataformaCM);
  console.log("Formulas: ", "aluguelCM: ", aluguelCM, "+", "internetCM: ", internetCM, "+", "plataformaCM: ", plataformaCM, "resultadoCustoMensalEnergia: ", resultadoCustoMensalEnergia, "=", resultadoTotalCustoMensal);

  faturamentoMensal();
  //DEBUG
  console.log("Variáveis faturamentoMensal(): ", "resultadoTaxasIniciaisFaturamentoMensal: ", resultadoTaxasIniciaisFaturamentoMensal, "taxaInicialVV: ", taxaInicialVV, "resultadoEnergiaFaturamentoMensal: ", resultadoEnergiaFaturamentoMensal, "kwhVV: ", kwhVV, "resultadoTotalBrutoFaturamentoMensal: ", resultadoTotalBrutoFaturamentoMensal, "resultadoTaxasTotaisFaturamentoMensal: ", resultadoTaxasTotaisFaturamentoMensal, "impostoTC: ", impostoTC, "plataformaTC: ", plataformaTC, "resultadoTotalLiquidoFaturamentoMensal: ", resultadoTotalLiquidoFaturamentoMensal);
  console.log("Fórmulas: ", "taxaInicialVV: ", taxaInicialVV, "*", "resultadoRecargaPorMes: ", resultadoRecargaPorMes, "=", resultadoTaxasIniciaisFaturamentoMensal);
  console.log("kwhVV: ", kwhVV, "*", "resultadoEnergiaDeOperacao: ", resultadoEnergiaDeOperacao, "=", resultadoEnergiaFaturamentoMensal);
  console.log("((impostoTC: ", impostoTC, "+", "plataformaTC", plataformaTC, ")", "*", "resultadoTotalBrutoFaturamentoMensal: ", resultadoTotalBrutoFaturamentoMensal, ")", "*", "-1", "=", resultadoTaxasTotaisFaturamentoMensal);
  console.log("resultadoTotalBrutoFaturamentoMensal: ", resultadoTotalBrutoFaturamentoMensal, "+", "resultadoTaxasTotaisFaturamentoMensal: ", resultadoTaxasTotaisFaturamentoMensal, "=", resultadoTotalLiquidoFaturamentoMensal);


  paybackResultados();
  //DEBUG
  console.log("Variáveis paybackResultados(): ", "resultadoLucroMensalPayback: ", resultadoLucroMensalPayback, "resultadoRetornoMensalPayback: ", resultadoRetornoMensalPayback, "resultadoLucroLiquidoAnual: ", resultadoLucroLiquidoAnual, "resultadoPayback: ", resultadoPayback);
  console.log("Fórmulas: ", "resultadoTotalLiquidoFaturamentoMensal: ", resultadoTotalLiquidoFaturamentoMensal, "-", "resultadoTotalCustoMensal", resultadoTotalCustoMensal, "=", resultadoLucroMensalPayback);
  console.log("((resultadoLucroMensalPayback: ", resultadoLucroMensalPayback, " * 100)", "/", "resultadoTotalInvestimentoInicial: ", resultadoTotalInvestimentoInicial, "/100", "=", resultadoRetornoMensalPayback);
  console.log("resultadoLucroMensalPayback: ", resultadoLucroMensalPayback, "* 12", "=", resultadoLucroLiquidoAnual);
  console.log("1 /", "resultadoRetornoMensalPayback: ", resultadoRetornoMensalPayback, "=", resultadoPayback);
}

// Função para abrir o pop-up
function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

// Fechar o pop-up ao clicar no "x"
document.querySelector('.close').onclick = function () {
  document.getElementById("popup").style.display = "none";
};

/// Evento ao clicar no botão "Iniciar Cálculo"
document.getElementById("iniciarCalculo").onclick = function () {
  // Faz o botão desaparecer
  this.style.display = "none";
  abrirInvestimentoInicial();
};

//INVESTIMENTO INICIAL
function abrirInvestimentoInicial() {
  openPopup();

  // Define o conteúdo do pop-up para Investimento Inicial
  document.querySelector('.popup-content').innerHTML = `
  <div class="popup-content" id="investimento"> 
  <span class="close">&times;</span>
    
    <header>
    <h1>INVESTIMENTO INICIAL</h1>
    
    <h3>Preencha os valores abaixo:</h3>
         <nav>
<ul>
  <li><a href="#" onclick="abrirInvestimentoInicial()">Investimento Inicial</a></li>
  <li><a href="#" onclick="abrirCustoMensal()">Custo Mensal</a></li>
  <li><a href="#" onclick="abrirValoresVenda()">Valores de Venda</a></li>
  <li><a href="#" onclick="abrirOperacao()">Operação</a></li>
  <li><a href="#" onclick="abrirTaxasCustos()">Taxas e Custos</a></li>
  <li><a href="#" onclick="abrirEscalaFuncionamento()">Escala de Funcionamento</a></li>
</ul>
</nav>
    </header>

    <label> CUSTO DO MATERIAL (R$)</label>
    <input type="number" id="material" placeholder="ex: 20000,00">
    
    <label> CUSTO DA MÃO DE OBRA (R$) </label>
    <input type="number" id="maoDeObra" placeholder="ex: 20000,00">
    
    <label> CUSTO DA ESTAÇÃO (R$)  </label>
    <input type="number" id="estacao" placeholder="ex: 135000,00">
    
    <label> PERSONALIZAÇÃO DO SOFTWARE </label>
    <input type="number" id="software" placeholder="ex: 200,00">
    
    <button id="submitInvestimento">Próximo</button> 
    
  </div>  
  `;

  // Fechar o pop-up ao clicar no "x"
  document.querySelector('.close').onclick = function () {
    document.getElementById("popup").style.display = "none";
  };

  // Atribuição de valores para Investimento Inicial e passar para o próximo pop-up
  document.getElementById("submitInvestimento").onclick = function () {
    materialInvestimento = parseFloat(parseFloat(document.getElementById("material").value).toFixed(2));
    maoDeObraInvestimento = parseFloat(parseFloat(document.getElementById("maoDeObra").value).toFixed(2));
    estacaoInvestimento = parseFloat(parseFloat(document.getElementById("estacao").value).toFixed(2));
    softwareInvestimento = parseFloat(parseFloat(document.getElementById("software").value).toFixed(2));

    // Fecha o pop-up e abre o próximo
    document.getElementById("popup").style.display = "none";
    abrirCustoMensal();
  };
}

//CUSTO MENSAL
function abrirCustoMensal() {
  openPopup();

  // Define o conteúdo do pop-up

  document.querySelector('.popup-content').innerHTML = `
<div class="popup-content" id="custo"> 
  <span class="close">&times;</span>
  <header>
    <h1>CUSTO MENSAL</h1>
    <h3>Preencha os valores abaixo:</h3>
        <nav>
<ul>
  <li><a href="#" onclick="abrirInvestimentoInicial()">Investimento Inicial</a></li>
  <li><a href="#" onclick="abrirCustoMensal()">Custo Mensal</a></li>
  <li><a href="#" onclick="abrirValoresVenda()">Valores de Venda</a></li>
  <li><a href="#" onclick="abrirOperacao()">Operação</a></li>
  <li><a href="#" onclick="abrirTaxasCustos()">Taxas e Custos</a></li>
  <li><a href="#" onclick="abrirEscalaFuncionamento()">Escala de Funcionamento</a></li>
</ul>
</nav>
</nav>
    </header>

    <label> ALUGUEL DO LOCAL (R$) </label>
    <input type="number" id="aluguelCustoMensal"  placeholder="ex: 0,00">
    <label> INTERNET (R$) </label>
    <input type="number" id="internetCustoMensal" placeholder="ex: 120,00">
    <label> PLATAFORMA </label>
    <input type="number" id="plataformaCustoMensal" placeholder="ex: 50,00">
    <button id="submitCustoMensal">Próximo</button>
  </div>  
  `;

  // Fechar o pop-up ao clicar no "x"
  document.querySelector('.close').onclick = function () {
    document.getElementById("popup").style.display = "none";
  };

  // Capturar o valor 
  document.getElementById("submitCustoMensal").onclick = function () {
    aluguelCM = parseFloat(parseFloat(document.getElementById("aluguelCustoMensal").value).toFixed(2));
    internetCM = parseFloat(parseFloat(document.getElementById("internetCustoMensal").value).toFixed(2));
    plataformaCM = parseFloat(parseFloat(document.getElementById("plataformaCustoMensal").value).toFixed(2));

    // Fecha o pop-up e abre o próximo
    document.getElementById("popup").style.display = "none";
    abrirValoresVenda();
  };
}

//VALORES DE VENDA
// Função para capturar o Valores de Venda
function abrirValoresVenda() {
  openPopup();

  // Define o conteúdo do pop-up para valores de venda
  document.querySelector('.popup-content').innerHTML = `
  <div class="popup-content" id="venda">   
  <span class="close">&times;</span>
    
    <header>
    <h1>VALORES DE VENDA</h1>
    <h3>Preencha os valores abaixo:</h3>
       <nav>
<ul>
  <li><a href="#" onclick="abrirInvestimentoInicial()">Investimento Inicial</a></li>
  <li><a href="#" onclick="abrirCustoMensal()">Custo Mensal</a></li>
  <li><a href="#" onclick="abrirValoresVenda()">Valores de Venda</a></li>
  <li><a href="#" onclick="abrirOperacao()">Operação</a></li>
  <li><a href="#" onclick="abrirTaxasCustos()">Taxas e Custos</a></li>
  <li><a href="#" onclick="abrirEscalaFuncionamento()">Escala de Funcionamento</a></li>
</ul>
</nav>
    </header>

    <label> TAXA INICIAL (R$) </label>
    <input type="number" id="taxaInicialVenda" placeholder="ex: 5">
    <label> KW/H </label>
    <input type="number" id="kwhVenda" placeholder="ex: 2,5"> 
    <button id="submitValoresVenda">Próximo</button>
    </div>
    `;

  // Fechar o pop-up ao clicar no "x"
  document.querySelector('.close').onclick = function () {
    document.getElementById("popup").style.display = "none";
  };

  // Capturar o valor de Taxas e passar para o próximo pop-up
  document.getElementById("submitValoresVenda").onclick = function () {
    taxaInicialVV = parseFloat(parseFloat(document.getElementById("taxaInicialVenda").value).toFixed(2));
    kwhVV = parseFloat(parseFloat(document.getElementById("kwhVenda").value).toFixed(2));

    // Fecha o pop-up e abre o próximo (se houver) ou calcula os resultados
    document.getElementById("popup").style.display = "none";
    abrirOperacao();
  }
}
//OPERAÇÃO
function abrirOperacao() {
  openPopup();

  // Define o conteúdo do pop-up para Operação
  document.querySelector('.popup-content').innerHTML = `
  <div class="popup-content" id="operacao">   
  <span class="close">&times;</span>
   
    <header>
    <h1>OPERAÇÃO</h1>
    <h3>Preencha os valores abaixo:</h3>
         <nav>
<ul>
  <li><a href="#" onclick="abrirInvestimentoInicial()">Investimento Inicial</a></li>
  <li><a href="#" onclick="abrirCustoMensal()">Custo Mensal</a></li>
  <li><a href="#" onclick="abrirValoresVenda()">Valores de Venda</a></li>
  <li><a href="#" onclick="abrirOperacao()">Operação</a></li>
  <li><a href="#" onclick="abrirTaxasCustos()">Taxas e Custos</a></li>
  <li><a href="#" onclick="abrirEscalaFuncionamento()">Escala de Funcionamento</a></li>
</ul>
</nav>
    </header>

    <label> TAXA DE OCUPAÇÃO (%) </label>
    <input type="number" id="taxaOcupacaoInput" placeholder="ex: 40">
    <label> CAPACIDADE DA BATERIA </label>
    <input type="number" id="capMediaBateria" placeholder="ex: 40"> 
    <label> POTÊNCIA MÉDIA RECARGA </label>
    <input type="number" id="potMediaBateria" placeholder="ex: 60">
    <button id="submitOperacao">Próximo</button>
    </div>
    `;

  // Fechar o pop-up ao clicar no "x"
  document.querySelector('.close').onclick = function () {
    document.getElementById("popup").style.display = "none";
  };

  // Capturar operacao e passar para o próximo pop-up
  document.getElementById("submitOperacao").onclick = function () {
    taxaOcupacao = parseFloat(parseFloat(document.getElementById("taxaOcupacaoInput").value).toFixed(2) / 100);
    capacidadeMediaBateria = parseFloat(parseFloat(document.getElementById("capMediaBateria").value).toFixed(2));
    potenciaMediaRecarga = parseFloat(parseFloat(document.getElementById("potMediaBateria").value).toFixed(2));

    // Fecha o pop-up e abre o próximo (se houver) ou calcula os resultados
    document.getElementById("popup").style.display = "none";
    abrirTaxasCustos();
  };
}

// Função para capturar o Valor de Taxas
function abrirTaxasCustos() {
  openPopup();

  // Define o conteúdo do pop-up para valor de Taxas
  document.querySelector('.popup-content').innerHTML = `
  <div class="popup-content" id="taxas">   
  <span class="close">&times;</span>
    <header>
    <h1>TAXAS E CUSTOS</h1>
    <h3>Preencha os valores abaixo:</h3>
        <nav>
<ul>
  <li><a href="#" onclick="abrirInvestimentoInicial()">Investimento Inicial</a></li>
  <li><a href="#" onclick="abrirCustoMensal()">Custo Mensal</a></li>
  <li><a href="#" onclick="abrirValoresVenda()">Valores de Venda</a></li>
  <li><a href="#" onclick="abrirOperacao()">Operação</a></li>
  <li><a href="#" onclick="abrirTaxasCustos()">Taxas e Custos</a></li>
  <li><a href="#" onclick="abrirEscalaFuncionamento()">Escala de Funcionamento</a></li>
</ul>
</nav>
    </header>

    <label> IMPOSTOS % </label>
    <input type="number" id="impostoTaxas" placeholder="ex: 10">
    <label> PLATAFORMA %</label>
    <input type="number" id="plataformaTaxas" placeholder="ex: 13"> 
    <label> VALOR DO KW/H (R$) </label>
    <input type="number" id="valorDoKWH" placeholder="ex: 1,00"> 
    <button id="submitTaxas">Próximo</button>
    </div>
    `;

  // Fechar o pop-up ao clicar no "x"
  document.querySelector('.close').onclick = function () {
    document.getElementById("popup").style.display = "none";
  };

  // Capturar o valor de Taxas e passar para o próximo pop-up
  document.getElementById("submitTaxas").onclick = function () {
    impostoTC = parseFloat(parseFloat(document.getElementById("impostoTaxas").value).toFixed(2) / 100);
    plataformaTC = parseFloat(parseFloat(document.getElementById("plataformaTaxas").value).toFixed(2) / 100);
    kwhTC = parseFloat(parseFloat(document.getElementById("valorDoKWH").value).toFixed(2));

    // Fecha o pop-up e abre o próximo (se houver) ou calcula os resultados
    document.getElementById("popup").style.display = "none";
    abrirEscalaFuncionamento();
  };
}


function abrirEscalaFuncionamento() {
  openPopup();

  // Define o conteúdo do pop-up Escala de funcionamento
  document.querySelector('.popup-content').innerHTML = `
  <div class="popup-content" id="escala">   
  <span class="close">&times;</span>
    
    <header>
    <h1>ESCALA DE FUNCIONAMENTO</h1>
    <h3>Preencha os valores abaixo:</h3>
       <nav>
<ul>
  <li><a href="#" onclick="abrirInvestimentoInicial()">Investimento Inicial</a></li>
  <li><a href="#" onclick="abrirCustoMensal()">Custo Mensal</a></li>
  <li><a href="#" onclick="abrirValoresVenda()">Valores de Venda</a></li>
  <li><a href="#" onclick="abrirOperacao()">Operação</a></li>
  <li><a href="#" onclick="abrirTaxasCustos()">Taxas e Custos</a></li>
  <li><a href="#" onclick="abrirEscalaFuncionamento()">Escala de Funcionamento</a></li>
</ul>
</nav>
    </header>

    <label> DIAS DE FUNCIONAMENTO </label>
    <input type="number" id="diasFuncionamento" placeholder="ex: 7">
    <label> HORAS POR DIA </label>
    <input type="number" id="horasDia" placeholder="ex: 12"> 
    <button id="submitEscala">Finalizar</button>
    </div>
    `;

  // Fechar o pop-up ao clicar no "x"
  document.querySelector('.close').onclick = function () {
    document.getElementById("popup").style.display = "none";
  };

  // Capturar o valor de Taxas e passar para o próximo pop-up
  document.getElementById("submitEscala").onclick = function () {
    diasSemana = parseInt(document.getElementById("diasFuncionamento").value * 4);
    console.log(diasSemana)
    horasMensais = parseInt((document.getElementById("horasDia").value * diasSemana) * taxaOcupacao);
    console.log("Total de horas: ", horasMensais)
    // Fecha o pop-up e abre o próximo (se houver) ou calcula os resultados
    document.getElementById("popup").style.display = "none";
    efetuarCalculos();
    abrirResultados();
  }

}


function abrirResultados() {
  openPopup();
  document.querySelector('.popup-content').innerHTML = `
  <div class="popup-content resultados"  id="investimento"> 
  <span class="close">&times;</span>
    
    <header>
    <h1>Resultados do Payback!</h1>
    <p>Lembrando que os valores podem ser muito próximos<br> mas nem sempre serão exatos!</p>
    <br><br><br>
    <h3>Lucro Mensal:</h3>
    <p>O seu Lucro Mensal será de aproximadamente <u>${resultadoLucroMensalPayback.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</u></p>
    
    <h3>Retorno Mensal:</h3>
    <p>O seu retorno mensal será de aproximadamente <u>${resultadoRetornoMensalPayback.toLocaleString('pt-BR', { style: 'percent', minimumFractionDigits: 1 })}</u></p>

    <h3>Lucro Anual:</h3>
    <p>O seu lucro líquido anual será de aproximadamente <u>${resultadoLucroLiquidoAnual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </u></p>

    <h3>Payback:</h3>
    <p>Você terá o seu payback em <u>${resultadoPayback}</u></p>
  `;
}