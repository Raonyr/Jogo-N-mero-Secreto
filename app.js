let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function definirHTML(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }
    else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparChute() {
    chute = document.querySelector("input");
    chute.value = "";
}

function exibirMensagemInicial() {
    definirHTML("h1", "Jogo no Número Secreto");
    definirHTML("p", "Escolha um número entre 1 e 10");
}

function verificarChute() {
    let chute = document.querySelector("input").value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        mensagemTentativa = `Você descobriu o número Secreto com ${tentativas} ${palavraTentativa}!`;
        
        definirHTML("h1", "Acertou");
        definirHTML("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else {
        if (chute > numeroSecreto){
            definirHTML("p", "O número secreto é menor");
        }
        else {
            definirHTML("p", "O número secreto é maior");
        }
        tentativas++;
        limparChute();
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparChute();
    tentativas = 1;
    exibirMensagemInicial();
}

exibirMensagemInicial();





