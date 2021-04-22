/* 

Pedro e Fernando são os desenvolvedores em uma stratup e vão desenvolver o novo sistema de cadastro, e pediram a sua ajuda. Sua task é fazer o código que valide as senhas que são cadastradas, para isso você deve atentar aos requisitos a seguir:

A senha deve conter, no mínimo, uma letra maiúscula, uma letra minúscula e um número;
A mesma não pode ter nenhum caractere de pontuação, acentuação ou espaço;
Além disso, a senha pode ter de 6 a 32 caracteres.

A entrada contém vários casos de teste e termina com final de arquivo. Cada linha tem uma string S, correspondente a senha que é inserida pelo usuário no momento do cadastro.

A saída contém uma linha, que pode ser “Senha valida.”, caso a senha tenha cada item dos requisitos solicitados anteriormente, ou “Senha invalida.”, se um ou mais requisitos não forem atendidos.

*/



function validadorDeSenha(senha) {
  // Escreva aqui a lógica para validar a senha
 
  
  /*Solução extensa e detalhada
  upperCaseTest = senha.toLocaleLowerCase(),
  lowerCaseTest = senha.toLocaleUpperCase(), 
  numberTest = senha.match(/(\d)/i),
  specialCharTest = senha.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, ''),
  lenghtTest = senha.length >= 6 && senha.length <= 32;
  
  
  if (senha !== upperCaseTest &&
      senha !== lowerCaseTest && 
      senha === specialCharTest &&  
      numberTest && lenghtTest) {
      return true; 
  } else { 
    return false;
  }
  */

  /* Soluçao curta utilizando a função test()
  https://stackoverflow.com/questions/43919606/i-could-not-seem-to-understand-a-z-this-expression */
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?!.*[_])\w{6,32}$/.test(senha);
  
}
  
let senha = "";
  
do {
  senha = gets();
  if (senha !== "") {
    let valido = validadorDeSenha(senha);
    console.log("Senha " + (valido ? "valida." : "invalida."));    
  }
} while (senha !== "");