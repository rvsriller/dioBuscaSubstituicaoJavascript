/*

    Algoritmo de ordenação de um conjunto de palavras pelo seu tamanho. 
    Receber um conjunto de palavras e retorna este mesmo conjunto ordenado 
    pelo tamanho das palavras decrescente, porém, se o tamanho das 
    palavras for igual, retorna as palavras em ordem alfabética.

    A primeira linha da entrada possui um único inteiro N, que indica o número 
    de casos de teste. Cada caso de teste poderá conter de 1 a 50 palavras inclusive,
    e cada uma das palavras poderá conter entre 1 e 50 caracteres inclusive. 
    Os caracteres poderão ser espaços, letras, ou números.

    A saída contem o conjunto de palavras da entrada em uma lista ordenados

*/

let casos = parseInt(gets()); // Contém a quantidade de casos de teste, sendo um N do tipo inteiro
let palavras = []; //Vetor para armazenar as palavras 



for (let i = 0; i < casos; i++) {
    palavras[i] = gets() // Recebe um caso a ser tratado
            .split(' ') // Separa palavras por espaços
            .sort((a, b) => (b.length > a.length) ? 1 : // Ordena cada elemento por tamanho
                (b.length === a.length)  ? (a > b) -1 : -1) // Ordena por ordem alfabética caso tenha o mesmo tamanho
            .toString() //Transforma em string
            .replace(/,/gi, " ") //Remove ','
}


for (ordenada in palavras) console.log(palavras[ordenada]); //Exibe cada palavra ordenada