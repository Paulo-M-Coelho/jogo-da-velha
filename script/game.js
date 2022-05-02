
let tabuleiro = ['', '', '', '', '', '', '', '', '',];//cada espaço vazio representa um quadrado do tabuleiro//
let vezdoJogador = 0; //começa com 0 pois representa o primeiro jogador//
let simbolos = ['o', 'x']; // O 'o' e 'x' representam as figuras que vão ser colocadas dentro dos quadrados, se a vez do jogador for 0 vai ser colocado 'o' se for 1 vai ser colocado 'x'//
let oJogoAcabou = false;

function movimento(posição) {

    if (oJogoAcabou) { //aqui é verificado toda rodada se o jogo acabou, se acabou não podem ter outras jogadas// 
        return
    }

    if (tabuleiro[posição] == '') // só vai ser colocado um simbolo se o quadrado estiver vazio//
        tabuleiro[posição] = simbolos[vezdoJogador] // o simbolo vai ser colocado de acordo com a vez do jogador//

    oJogoAcabou = oVencedor()//ouve um vencedor nessa jogada?//

    if (oJogoAcabou == false) {//a jogada só vai passar para o procimo jogador se aqui for falso//

        vezdoJogador = (vezdoJogador == 0) ? 1 : 0;   //se a vez do jogador for = 0 a vez passa pra o jogador 1 e vice e versa//
        //isso faz com q cada vez que for clicado um simbolo diferente seja adicionado//                                        

    }

    return oJogoAcabou;
}

function oVencedor() {

    let posiçõesDeVitoria = [ //se os simbolos nessa posiçoes forem iguais sera vitoria//
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < posiçõesDeVitoria.length; i++) {
        let sequencias = posiçõesDeVitoria[i]; //cada vez que passar no for vai verificar uma dessas sequancias//

        let pos1 = sequencias[0];
        let pos2 = sequencias[1];
        let pos3 = sequencias[2];

        if (tabuleiro[pos1] == tabuleiro[pos2] &&
            tabuleiro[pos1] == tabuleiro[pos3] &&
            tabuleiro[pos1] != '') {

            return true;    //esse for vai retornar o resultado dessa comparacões de posisões, retornando false ou true//
        }
    }
    return false;
}


