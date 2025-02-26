// Definindo a classe Carro
class Carro {
    constructor(modelo, cor) {
        this.modelo = modelo;
        this.cor = cor;
        this.ligado = false;
        this.velocidade = 0;
    }

    ligar() {
        this.ligado = true;
        console.log("Carro Ligado!");
    }

    desligar() {
        this.ligado = false;
        this.velocidade = 0;
        atualizarVelocidade();
        console.log("Carro Desligado!");
    }

    acelerar() {
        if (this.ligado) {
            this.velocidade += 10;
            atualizarVelocidade();
            console.log("Velocidade:", this.velocidade);
        } else {
            console.log("Ligue o carro primeiro!");
        }
    }
}

// Criando um objeto Carro
const meuCarro = new Carro("Uno", "Vermelho");

// Exibindo informações iniciais
document.getElementById("modelo").textContent = meuCarro.modelo;
document.getElementById("cor").textContent = meuCarro.cor;

// Função para atualizar a velocidade na tela
function atualizarVelocidade() {
    document.getElementById("velocidade").textContent = meuCarro.velocidade;
}

// Obtendo os botões
const botaoLigar = document.getElementById("ligar");
const botaoDesligar = document.getElementById("desligar");
const botaoAcelerar = document.getElementById("acelerar");

// Adicionando eventos aos botões
botaoLigar.addEventListener("click", function() {
    meuCarro.ligar();
});

botaoDesligar.addEventListener("click", function() {
    meuCarro.desligar();
});

botaoAcelerar.addEventListener("click", function() {
    meuCarro.acelerar();
});