// script.js - (Não alterado do código anterior)

// Variáveis para armazenar as instâncias das classes
let meuCarro;
let meuEsportivo;
let meuCaminhao;


// Funções para o Carro
function criarCarro() {
  const modelo = document.getElementById("modeloCarro").value;
  const cor = document.getElementById("corCarro").value;
  const imagemInput = document.getElementById("imagemCarro");
  let imagemURL = null;

  if (imagemInput.files && imagemInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      imagemURL = e.target.result;
      meuCarro = new Carro(modelo, cor, imagemURL); // Passa a URL da imagem para o construtor
      atualizarInfoCarro();
    }
    reader.readAsDataURL(imagemInput.files[0]); // Converte a imagem em URL
  } else {
    meuCarro = new Carro(modelo, cor, imagemURL); // Passa a URL da imagem para o construtor (pode ser nula)
    atualizarInfoCarro();
  }
}


function ligarCarro() {
  if (meuCarro) {
    meuCarro.ligar();
    atualizarInfoCarro();
  } else {
    alert("Crie um carro primeiro!");
  }
}

function desligarCarro() {
  if (meuCarro) {
    meuCarro.desligar();
    atualizarInfoCarro();
  } else {
    alert("Crie um carro primeiro!");
  }
}

function acelerarCarro() {
  if (meuCarro) {
    meuCarro.acelerar(10); // Valor de incremento arbitrário
    atualizarInfoCarro();
  } else {
    alert("Crie um carro primeiro!");
  }
}

function frearCarro() {
  if (meuCarro) {
    meuCarro.frear(5); // Valor de decremento arbitrário
    atualizarInfoCarro();
  } else {
    alert("Crie um carro primeiro!");
  }
}


function atualizarInfoCarro() {
  const infoDiv = document.getElementById("carroInfo");
  if (meuCarro) {
    let imagemExibicao = "";
    if (meuCarro.imagem) {
      imagemExibicao = `<img src="${meuCarro.imagem}" alt="Imagem do Carro" >`;
    }
    infoDiv.innerHTML = `
      Modelo: ${meuCarro.modelo}<br>
      Cor: ${meuCarro.cor}<br>
      Ligado: ${meuCarro.ligado}<br>
      Velocidade: ${meuCarro.velocidade}<br>
      ${imagemExibicao} <!-- Exibe a imagem -->
    `;
  } else {
    infoDiv.innerHTML = "Nenhum carro criado.";
  }
}



// Funções para o Carro Esportivo
function criarEsportivo() {
  const modelo = document.getElementById("modeloEsportivo").value;
  const cor = document.getElementById("corEsportivo").value;
  const imagemInput = document.getElementById("imagemEsportivo");
  let imagemURL = null;

  if (imagemInput.files && imagemInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      imagemURL = e.target.result;
      meuEsportivo = new CarroEsportivo(modelo, cor, imagemURL);
      atualizarInfoEsportivo();
    }
    reader.readAsDataURL(imagemInput.files[0]);
  } else {
    meuEsportivo = new CarroEsportivo(modelo, cor, imagemURL);
    atualizarInfoEsportivo();
  }
}


function ligarEsportivo() {
  if (meuEsportivo) {
    meuEsportivo.ligar();
    atualizarInfoEsportivo();
  } else {
    alert("Crie um carro esportivo primeiro!");
  }
}

function desligarEsportivo() {
  if (meuEsportivo) {
    meuEsportivo.desligar();
    atualizarInfoEsportivo();
  } else {
    alert("Crie um carro esportivo primeiro!");
  }
}

function acelerarEsportivo() {
  if (meuEsportivo) {
    meuEsportivo.acelerar(10); // Valor de incremento arbitrário
    atualizarInfoEsportivo();
  } else {
    alert("Crie um carro esportivo primeiro!");
  }
}

function frearEsportivo() {
  if (meuEsportivo) {
    meuEsportivo.frear(5); // Valor de decremento arbitrário
    atualizarInfoEsportivo();
  } else {
    alert("Crie um carro esportivo primeiro!");
  }
}

function ativarTurbo() {
  if (meuEsportivo) {
    meuEsportivo.ativarTurbo();
    atualizarInfoEsportivo();
  } else {
    alert("Crie um carro esportivo primeiro!");
  }
}

function desativarTurbo() {
    if (meuEsportivo) {
        meuEsportivo.desativarTurbo();
        atualizarInfoEsportivo();
    } else {
        alert("Crie um carro esportivo primeiro!");
    }
}


function atualizarInfoEsportivo() {
  const infoDiv = document.getElementById("esportivoInfo");
  if (meuEsportivo) {
    let imagemExibicao = "";
    if (meuEsportivo.imagem) {
      imagemExibicao = `<img src="${meuEsportivo.imagem}" alt="Imagem do Carro Esportivo">`;
    }
    infoDiv.innerHTML = `
      Modelo: ${meuEsportivo.modelo}<br>
      Cor: ${meuEsportivo.cor}<br>
      Ligado: ${meuEsportivo.ligado}<br>
      Velocidade: ${meuEsportivo.velocidade}<br>
      Turbo Ativado: ${meuEsportivo.turboAtivado}<br>
      ${imagemExibicao}  <!-- Exibe a imagem -->
    `;
  } else {
    infoDiv.innerHTML = "Nenhum carro esportivo criado.";
  }
}


// Funções para o Caminhão
function criarCaminhao() {
  const modelo = document.getElementById("modeloCaminhao").value;
  const cor = document.getElementById("corCaminhao").value;
  const capacidade = parseInt(document.getElementById("capacidadeCaminhao").value);
  const imagemInput = document.getElementById("imagemCaminhao");
  let imagemURL = null;

  if (imagemInput.files && imagemInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      imagemURL = e.target.result;
      meuCaminhao = new Caminhao(modelo, cor, capacidade, imagemURL);
      atualizarInfoCaminhao();
    }
    reader.readAsDataURL(imagemInput.files[0]);
  } else {
    meuCaminhao = new Caminhao(modelo, cor, capacidade, imagemURL);
    atualizarInfoCaminhao();
  }
}

function ligarCaminhao() {
  if (meuCaminhao) {
    meuCaminhao.ligar();
    atualizarInfoCaminhao();
  } else {
    alert("Crie um caminhão primeiro!");
  }
}

function desligarCaminhao() {
  if (meuCaminhao) {
    meuCaminhao.desligar();
    atualizarInfoCaminhao();
  } else {
    alert("Crie um caminhão primeiro!");
  }
}

function acelerarCaminhao() {
  if (meuCaminhao) {
    meuCaminhao.acelerar(10); // Valor de incremento arbitrário
    atualizarInfoCaminhao();
  } else {
    alert("Crie um caminhão primeiro!");
  }
}

function frearCaminhao() {
  if (meuCaminhao) {
    meuCaminhao.frear(5); // Valor de decremento arbitrário
    atualizarInfoCaminhao();
  } else {
    alert("Crie um caminhão primeiro!");
  }
}

function carregarCaminhao() {
    if (meuCaminhao) {
        const quantidade = parseInt(prompt("Quantidade para carregar:"));
        if (!isNaN(quantidade)) {
            meuCaminhao.carregar(quantidade);
            atualizarInfoCaminhao();
        } else {
            alert("Por favor, insira uma quantidade válida.");
        }
    } else {
        alert("Crie um caminhão primeiro!");
    }
}


function descarregarCaminhao() {
    if (meuCaminhao) {
        const quantidade = parseInt(prompt("Quantidade para descarregar:"));
        if (!isNaN(quantidade)) {
            meuCaminhao.descarregar(quantidade);
            atualizarInfoCaminhao();
        } else {
            alert("Por favor, insira uma quantidade válida.");
        }
    } else {
        alert("Crie um caminhão primeiro!");
    }
}


function atualizarInfoCaminhao() {
  const infoDiv = document.getElementById("caminhaoInfo");
  if (meuCaminhao) {
    let imagemExibicao = "";
    if (meuCaminhao.imagem) {
      imagemExibicao = `<img src="${meuCaminhao.imagem}" alt="Imagem do Caminhão">`;
    }
    infoDiv.innerHTML = `
      Modelo: ${meuCaminhao.modelo}<br>
      Cor: ${meuCaminhao.cor}<br>
      Ligado: ${meuCaminhao.ligado}<br>
      Velocidade: ${meuCaminhao.velocidade}<br>
      Capacidade de Carga: ${meuCaminhao.capacidadeCarga}<br>
      Carga Atual: ${meuCaminhao.cargaAtual}<br>
      ${imagemExibicao} <!-- Exibe a imagem -->
    `;
  } else {
    infoDiv.innerHTML = "Nenhum caminhão criado.";
  }
}// script.js - (Não alterado do código anterior)

class Carro {
  constructor(modelo, cor, imagem = null) {  // Imagem opcional com valor padrão nulo
    this.modelo = modelo;
    this.cor = cor;
    this.ligado = false;
    this.velocidade = 0;
    this.imagem = imagem;
  }

  ligar() {
    this.ligado = true;
    console.log("Carro ligado!");
  }

  desligar() {
    this.ligado = false;
    this.velocidade = 0;
    console.log("Carro desligado!");
  }

  acelerar(incremento) {
    if (this.ligado) {
      this.velocidade += incremento;
      console.log(`Acelerando. Velocidade atual: ${this.velocidade}`);
    } else {
      console.log("O carro precisa estar ligado para acelerar.");
    }
  }

  frear(decremento) {
    this.velocidade -= decremento;
    if (this.velocidade < 0) {
      this.velocidade = 0;
    }
    console.log(`Freando. Velocidade atual: ${this.velocidade}`);
  }
}

class CarroEsportivo extends Carro {
  constructor(modelo, cor, imagem = null) { // Imagem opcional com valor padrão nulo
    super(modelo, cor, imagem); // Chama o construtor da classe pai (Carro)
    this.turboAtivado = false;
  }

  ativarTurbo() {
    if (this.ligado) {
      this.turboAtivado = true;
      this.acelerar(50); // Aumenta a velocidade ao ativar o turbo
      console.log("Turbo ativado!");
    } else {
      console.log("Ligue o carro primeiro!");
    }
  }

    desativarTurbo() {
        this.turboAtivado = false;
        console.log("Turbo desativado!");
    }
}

class Caminhao extends Carro {
  constructor(modelo, cor, capacidadeCarga, imagem = null) { // Imagem opcional com valor padrão nulo
    super(modelo, cor, imagem);
    this.capacidadeCarga = capacidadeCarga;
    this.cargaAtual = 0;
  }

  carregar(quantidade) {
    if (this.cargaAtual + quantidade <= this.capacidadeCarga) {
      this.cargaAtual += quantidade;
      console.log(`Caminhão carregado. Carga atual: ${this.cargaAtual}`);
    } else {
      console.log("Capacidade máxima excedida!");
    }
  }

    descarregar(quantidade) {
        if (this.cargaAtual - quantidade >= 0) {
            this.cargaAtual -= quantidade;
            console.log(`Caminhão descarregado. Carga atual: ${this.cargaAtual}`);
        } else {
            console.log("Não é possível descarregar mais do que a carga atual.");
        }
    }
}
 