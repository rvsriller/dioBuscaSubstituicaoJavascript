let casos = parseInt(gets()); // Recebe quantidade de testes
let palavras = []; 



for (let i = 0; i < casos; i++) {
    palavras[i] = gets() // Recebe um caso a ser tratado
            .split(' ') // Separa palavras por espaços
            .sort((a, b) => (b.length > a.length) ? 1 : // Ordena cada elemento por tamanho
                (b.length === a.length)  ? (a > b) -1 : -1) // Ordena por ordem alfabética caso tenha o mesmo tamanho
            .toString() //Transforma em string
            .replace(/,/gi, " ") //Remove ','
}


for (ordenada in palavras) console.log(palavras[ordenada]); //Exibe cada palavra ordenada