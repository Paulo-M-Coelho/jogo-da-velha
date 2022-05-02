document.addEventListener('DOMContentLoaded', () => {     //essa função garante que todo o documento tenha sido carregado para poder dar inicio//


    let quadrados = document.querySelectorAll(".quadrado");

    quadrados.forEach((quadradoqfoiclicado) => {
        quadradoqfoiclicado.addEventListener('click', clicador) //esse clicador é uma função, aqui esta colocando uma ação toda vez que clicar em um quadrado//

    })

})

function clicador(evento) {

    let quadrado = evento.target;    //esse quadrado agora vai representar qual item foi clicado//
    let posição = quadrado.id;       //essa variavel de posição vai receber o ID de cada quadrado clicado//

    let plac1 = document.getElementById("p1")
    let plac2 = document.getElementById("p2")

    if (movimento(posição)) {


        if (vezdoJogador == 0) {

            setTimeout(() => {
                alert("o Jogo acabou o vencedor foi o jogador 1");
            }, 10)

            setTimeout(() => {
                plac1.innerHTML = parseInt(plac1.innerText) + 1;   // o parseInt trnasforma a string em um numero para que seja somado e não concatenado//

            }, 10)
        }
        else {
            setTimeout(() => {
                alert("o Jogo acabou o vencedor foi o jogador 2")
                plac2.innerHTML = parseInt(plac2.innerText) + 1;

            }, 10)
        }
    }

    atualizaçãoDosQuadrados();
}

function atualizaçãoDosQuadrados() {

    let quadrados = document.querySelectorAll(".quadrado"); // aqui varre mais uma vez todos os quadrados//

    quadrados.forEach((quadrado) => {
        let posição = quadrado.id;    //pega a posição//
        let simbolo = tabuleiro[posição]; // pega o simbolo e coloca na posição correspondente//

        if (simbolo != '') { //se o simbolo não for vazio se coloca o simbolo da vez//
            quadrado.innerHTML = `<div class='${simbolo}'></div>`
        }
    })
}

function reset() {

    let quadrados = document.querySelectorAll(".quadrado");

    quadrados.forEach((quadradoqfoiclicado) => {
        quadradoqfoiclicado.innerHTML = ""
    })

    if (quadrados != "") {
        tabuleiro = ['', '', '', '', '', '', '', '', '',];
        if (vezdoJogador == 0) { //esse if verifica quem foi o vencedor e na proxima partida quem inicia foi quem perdeu//
            vezdoJogador = 1
        } else {
            vezdoJogador = 0
        }
        oJogoAcabou = false;
    }
    else { }

}

//quero se o vencedor for o jogador 0 o placar adicione 1 ao <h2 class="p1">
//quero se o vencedor for o jogador 1 o placar adicione 1 ao <h2 class="p2">














