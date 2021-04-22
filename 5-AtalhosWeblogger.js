/*
  Atalhos para o Weblogger
  A entrada contem vários casos de teste. Cada caso de teste é composto por uma linha que contem uma string texto,
  com zero ou mais usos dos atalhos itálico e negrito. Cada texto tem de 1 a 50 caracteres, inclusive. Os únicos caracteres
  permitidos no texto são os caracteres alfabéticos (de 'a' a 'z' e de 'A' a 'Z'), o sublinhado ('_'), o asterisco ('*'), 
  o caractere de espaço e os símbolos de pontuação ',', ';', '.', '!', '?', '-', '(' e ')'. O caractere sublinhado '_' ocorre no 
  texto um número par de vezes. O asterisco '*' também aparece um número par de vezes no texto. Nenhuma substring do texto entre 
  um par de sublinhados ou entre um par de asteriscos pode conter outros sublinhados ou asteriscos, respectivamente.

  Para cada linha de entrada seu programa deve gerar uma linha de saída com o texto traduzido para HTML como demonstrado nos exemplos abaixo. 
  Para tornar itálico um pedaço de texto no HTML, você deve iniciar este pedaço com a tag <i> e terminá-lo com a tag </i>. Para texto em negrito, 
  inicie com <b> e termine com </b>.

  Exemplo
  Você _deveria_ ver a ->>>  Você <i>deveria</i> ver a
  Marque a conta *a receber* para *paga*.  ->>>  Marque a conta <b>a receber</b> para <b>paga</b>.
*/

let text = gets(); //Texto
const italics = /\_(.*?)\_/gim;  //Símbolos aceitos para italico
const bold = /\*(.*?)\*/gim; //Símbolos aceitos para negrito

//função para conversão
function parseMarkdown(text) {
  //Converter símbolos
  const html = text.replace(italics, "<i>$1</i>").replace(bold, "<b>$1</b>");
  return html.trim();
}

let count = 0;

do {
  console.log(parseMarkdown(text));
  text = gets();
  count++;
} while (count < 60);


//Outra solução em construção
/*

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

while (true) {
  let string = lines.shift();

  if (!string) {
    break;
  }

  const letters = string.split("");
  const formattedLetters = letters;

  let searchingItalicEndTag = false;
  let searchingBoldEndTag = false;

  for (let i = 0; i < letters.length; i++) {
   //continue a solução 

    if (letter === "_") {
      formattedLetters[i] = searchingItalicEndTag
       //continue a solução 

    } else if (letter === "*") {
    //continue a solução 
    }
  }
  
  console.log(formattedLetters.join(""));
}

*/