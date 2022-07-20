// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// 가장 첫 글자를 맨 뒤로 보내고, ay 를 붙인다.

function pigIt(str){
  return str.split(" ").map((el) => el.match(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g) ? el : el.slice(1)+el[0]+"ay").join(" ");
}