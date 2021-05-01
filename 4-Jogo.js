/* 

Pedra-papel-tesoura-lagarto-Spock é uma expansão do clássico método de seleção em jogo de pedra-papel-tesoura. 
Atua sob o mesmo princípio básico, mas inclui outras duas armas adicionais: o lagarto 
(formado pela mão igual a uma boca de fantoche) e Spock (formada pela saudação dos vulcanos em Star Trek). 
Isso reduz as chances de uma rodada terminar em um empate. O jogo foi inventado por Sam Kass e Karen Bryla, 
como "Rock Paper Scissors Lizard Spock". As regras de vantagem são as seguintes:

Haverá diversos casos de teste. O primeiro número a ser lido será um inteiro, representando a quantidade de casos de teste. 
Cada caso de teste tem duas palavras, representando a escolha de Fernanda e de Marcia, respectivamente.

Para cada caso de teste, imprima quem venceu, ou se houve empate.

*/


let dicionarioDeRegras = {
    tesoura: ['papel','lagarto'],
    papel: ['pedra','spock'],
    pedra: ['lagarto','tesoura'],
    lagarto: ['spock','papel'],
    spock: ['tesoura','pedra']
};

//finalize a declaração das jogadoras
let jogador1 = 'fernanda';
let  jogador2 = 'marcia';

let resultado;

let N = parseInt(gets()); //Quantidade de casos a serem testados

// continue a solução
for(let i = 0; i < N; i++){

    let escolha = gets().split(' '); //Divide as escolhas
    if( escolha[0]   ===  escolha[1]) //Compara se são iguais
        resultado = 'empate';
    else 
        resultado = (  dicionarioDeRegras[escolha[0]] .includes(escolha[1])  ) ? jogador1  :  jogador2;

    print(resultado); //Saída
}