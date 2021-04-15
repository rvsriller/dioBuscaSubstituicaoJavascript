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