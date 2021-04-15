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

let N = parseInt(gets());

// continue a solução

for(let i = 0; i < N; i++){

let escolha = gets().split(' ');
if( escolha[0]   ===  escolha[1])
resultado = 'empate';
else
resultado = (  dicionarioDeRegras[escolha[0]] .includes(escolha[1])  )? jogador1  :  jogador2;

print(resultado);
}