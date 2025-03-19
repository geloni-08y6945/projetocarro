// script.js

// Classes
class Veiculo {
    constructor(modelo, cor, imagem = null, ligado = false, velocidade = 0) {
        this.modelo = modelo;
        this.cor = cor;
        this.imagem = imagem;
        this.ligado = ligado;
        this.velocidade = velocidade;
    }

    ligar() {
        this.ligado = true;
        this.updateDisplay();
    }

    desligar() {
        this.ligado = false;
        this.velocidade = 0;
        this.updateDisplay();
    }

    acelerar(incremento) {
        if (this.ligado) {
            this.velocidade += incremento;
            this.updateDisplay();
        }
    }

    frear(decremento) {
        this.velocidade = Math.max(0, this.velocidade - decremento);
        this.updateDisplay();
    }

    exibirInformacoes() {
        return `Modelo: ${this.modelo}, Cor: ${this.cor}, Ligado: ${this.ligado ? 'Sim' : 'Não'}, Velocidade: ${this.velocidade}`;
    }

    updateDisplay() {
        document.getElementById("informacoesVeiculo").textContent = this.exibirInformacoes();
    }
}

class Carro extends Veiculo {
    exibirInformacoes() {
        return `[Carro] ${super.exibirInformacoes()}`;
    }
}

class CarroEsportivo extends Veiculo {
    constructor(modelo, cor, imagem = null) {
        super(modelo, cor, imagem);
        this.turboAtivado = false;
    }

    ativarTurbo() {
        if (this.ligado) {
            this.turboAtivado = true;
            this.updateDisplay();
        }
    }

    desativarTurbo() {
        this.turboAtivado = false;
        this.updateDisplay();
    }

    exibirInformacoes() {
        return `[Carro Esportivo] ${super.exibirInformacoes()}, Turbo: ${this.turboAtivado ? 'Ativado' : 'Desativado'}`;
    }
}

class Caminhao extends Veiculo {
    constructor(modelo, cor, capacidadeCarga, imagem = null) {
        super(modelo, cor, imagem);
        this.capacidadeCarga = capacidadeCarga;
        this.cargaAtual = 0;
    }

    carregar(quantidade) {
        this.cargaAtual += quantidade;
        this.updateDisplay();
    }

    descarregar(quantidade) {
        this.cargaAtual = Math.max(0, this.cargaAtual - quantidade);
        this.updateDisplay();
    }

    exibirInformacoes() {
        return `[Caminhão] ${super.exibirInformacoes()}, Capacidade de Carga: ${this.capacidadeCarga}, Carga Atual: ${this.cargaAtual}`;
    }
}

// Global variables
let garagem = {
    carro: null,
    esportivo: null,
    caminhao: null
};
let veiculoSelecionado = null;

// Function to select a vehicle type
document.querySelectorAll("#selecao-veiculo button").forEach(button => {
    button.addEventListener("click", function () {
        veiculoSelecionado = this.dataset.tipo;

        // Hide/show specific fields
        document.getElementById("labelCapacidadeCarga").style.display = (veiculoSelecionado === 'caminhao') ? 'block' : 'none';
        document.getElementById("capacidadeCarga").style.display = (veiculoSelecionado === 'caminhao') ? 'block' : 'none';
        document.getElementById("btnTurbo").style.display = (veiculoSelecionado === 'esportivo') ? 'inline-block' : 'none';
        document.getElementById("btnDesativarTurbo").style.display = (veiculoSelecionado === 'esportivo') ? 'inline-block' : 'none';
        document.getElementById("btnCarregar").style.display = (veiculoSelecionado === 'caminhao') ? 'inline-block' : 'none';
        document.getElementById("btnDescarregar").style.display = (veiculoSelecionado === 'caminhao') ? 'inline-block' : 'none';

        updateInfoVeiculo(); // Update display after selection
    });
});

// Function to create/modify a vehicle
document.getElementById("btnCriarVeiculo").addEventListener("click", function () {
    const modelo = document.getElementById("modelo").value;
    const cor = document.getElementById("cor").value;
    const imagemInput = document.getElementById("imagem");
    const capacidadeCarga = document.getElementById("capacidadeCarga").value;
    let imagemURL = null;

    if (imagemInput.files && imagemInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imagemURL = e.target.result;
            assignVehicle(modelo, cor, imagemURL, capacidadeCarga);
        }
        reader.readAsDataURL(imagemInput.files[0]);
    } else {
        assignVehicle(modelo, cor, imagemURL, capacidadeCarga);
    }
});

function assignVehicle(modelo, cor, imagemURL, capacidadeCarga) {
    switch (veiculoSelecionado) {
        case 'carro':
            garagem.carro = new Carro(modelo, cor, imagemURL);
            break;
        case 'esportivo':
            garagem.esportivo = new CarroEsportivo(modelo, cor, imagemURL);
            break;
        case 'caminhao':
            garagem.caminhao = new Caminhao(modelo, cor, capacidadeCarga, imagemURL);
            break;
        default:
            alert("Selecione um tipo de veículo primeiro!");
            return;
    }
    updateInfoVeiculo();
}

// Interaction function
document.querySelectorAll("#acoes-veiculo button").forEach(button => {
    button.addEventListener("click", function () {
        const acao = this.dataset.acao;
        let veiculo = null;

        switch (veiculoSelecionado) {
            case 'carro':
                veiculo = garagem.carro;
                break;
            case 'esportivo':
                veiculo = garagem.esportivo;
                break;
            case 'caminhao':
                veiculo = garagem.caminhao;
                break;
            default:
                alert("Selecione um tipo de veículo primeiro!");
                return;
        }

        if (!veiculo) {
            alert("Crie um veículo primeiro!");
            return;
        }

        switch (acao) {
            case 'ligar':
                veiculo.ligar();
                break;
            case 'desligar':
                veiculo.desligar();
                break;
            case 'acelerar':
                veiculo.acelerar(10);
                break;
            case 'frear':
                veiculo.frear(5);
                break;
            case 'ativarTurbo':
                if (veiculo instanceof CarroEsportivo) {
                    veiculo.ativarTurbo();
                }
                break;
            case 'desativarTurbo':
                if (veiculo instanceof CarroEsportivo) {
                    veiculo.desativarTurbo();
                }
                break;
            case 'carregar':
                if (veiculo instanceof Caminhao) {
                    const quantidade = parseInt(prompt("Quantidade para carregar:"));
                    if (!isNaN(quantidade)) {
                        veiculo.carregar(quantidade);
                    }
                }
                break;
            case 'descarregar':
                if (veiculo instanceof Caminhao) {
                    const quantidade = parseInt(prompt("Quantidade para descarregar:"));
                    if (!isNaN(quantidade)) {
                        veiculo.descarregar(quantidade);
                    }
                }
                break;
        }

        updateInfoVeiculo();
    });
});

// Update display function
function updateInfoVeiculo() {
    const infoDiv = document.getElementById("informacoesVeiculo");
    const imagemExibida = document.getElementById("imagemExibida");
    let veiculo = null;

    switch (veiculoSelecionado) {
        case 'carro':
            veiculo = garagem.carro;
            break;
        case 'esportivo':
            veiculo = garagem.esportivo;
            break;
        case 'caminhao':
            veiculo = garagem.caminhao;
            break;
    }

    if (veiculo) {
        infoDiv.textContent = veiculo.exibirInformacoes();
        if (veiculo.imagem) {
            imagemExibida.src = veiculo.imagem;
            imagemExibida.style.display = 'block';
        } else {
            imagemExibida.style.display = 'none';
        }
    } else {
        infoDiv.textContent = "Nenhum veículo criado ou selecionado.";
        imagemExibida.style.display = 'none';
    }
}