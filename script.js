const textoEnredo = document.querySelector(".texto-enredo");
const secaoOpcoes = document.querySelector(".secao-opcoes");
const mensagemFinal = document.querySelector(".mensagem-final");
const botaoReiniciar = document.querySelector(".botao-reiniciar");

let estadoAtual = {};

const cenarios = {
    inicio: {
        texto: "Você se encontra em uma encruzilhada. Um caminho leva a uma floresta densa, o outro a uma montanha rochosa. Qual você escolhe?",
        opcoes: [
            { texto: "Floresta Densa", proximoCenario: "floresta" },
            { texto: "Montanha Rochosa", proximoCenario: "montanha" }
        ]
    },
    floresta: {
        texto: "Ao entrar na floresta, você ouve um uivo. Você decide investigar ou procurar abrigo?",
        opcoes: [
            { texto: "Investigar Uivo", proximoCenario: "uivo" },
            { texto: "Procurar Abrigo", proximoCenario: "abrigo" }
        ]
    },
    // ... adicione mais cenários aqui
    finalFeliz: {
        texto: "Parabéns! Você encontrou o tesouro perdido e se tornou o herói do reino!",
        opcoes: []
    },
    finalTriste: {
        texto: "Infelizmente, sua aventura chegou a um fim abrupto. Tente novamente!",
        opcoes: []
    }
};

function iniciarJogo() {
    estadoAtual = cenarios.inicio;
    atualizarCenario();
    botaoReiniciar.style.display = 'none';
    mensagemFinal.textContent = '';
}

function atualizarCenario() {
    textoEnredo.textContent = estadoAtual.texto;
    secaoOpcoes.innerHTML = '';
    estadoAtual.opcoes.forEach(opcao => {
        const botao = document.createElement("button");
        botao.textContent = opcao.texto;
        botao.addEventListener("click", () => escolherOpcao(opcao.proximoCenario));
        secaoOpcoes.appendChild(botao);
    });

    if (estadoAtual.opcoes.length === 0) { // Se não há mais opções, é um final
        mensagemFinal.textContent = estadoAtual.texto; // O final também pode ter um texto no lugar do enredo
        botaoReiniciar.style.display = 'block';
    }
}

function escolherOpcao(proximoCenario) {
    estadoAtual = cenarios[proximoCenario];
    atualizarCenario();
}

botaoReiniciar.addEventListener("click", iniciarJogo);

iniciarJogo(); // Inicia o jogo ao carregar a página
