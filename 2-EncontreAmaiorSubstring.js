/* 
    Algoritmo processa dados e encontra maior substring comum entre as duas strings informadas. 
    A substring pode ser qualquer parte da string, inclusive ela toda. Se não houver subseqüência comum, 
    a saída é definida por “0”. A comparação é case sensitive ('x' != 'X').

    A entrada contém vários casos de teste. Cada caso de teste é composto por duas linhas, 
    cada uma contendo uma string. Ambas strings de entrada contém entre 
    1 e 50 caracteres ('A'-'Z','a'-'z' ou espaço ' '), inclusive, ou no mínimo uma letra ('A'-'Z','a'-'z').

    

*/

let breaking = 0; //Flag de parada do algoritmo

while (breaking !== 1) {

    let s = gets(), ss = gets(), //Recebe as duas strings 
    str1, str2, maxSubstring = 0, strings = []; //Variáveis 

    if(s !== "" && ss !== "") { //Condicional de parada do algoritmo

        if (s.length < ss.length) {  //Verificando o tamnho das duas strings
            str1 = ss; str2 = s; //S é maior que SS
        }else {
            str1 = s; str2 = ss; //SS é maior que S
        }

        for (let i = 0; i < str2.length; i++) {
            for (let j = 0; j < str2.length; j++){

                let nstr = str2.substring(j, str2.length - i);

                if (str1.match(nstr)) {
                    strings.push(nstr);
                    if (nstr.length > maxSubstring) maxSubstring = nstr.length;
                }
            }
        }

        console.log(`${maxSubstring}`);

    } else { //Passo de parada do algoritmo
        breaking = 1;  
    }
}