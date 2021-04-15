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