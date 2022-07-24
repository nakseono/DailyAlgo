// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string,
// they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// ROT13은 알파벳 문자 뒤에 있는 13개의 문자로 대체되는 간단한 문자 치환 암호이다.
// ROT13은 시저 암호의 한 예이다.
// 문자열을 가져와서 Rot13으로 암호화된 문자열을 반환하는 함수를 만듭니다.
// 문자열에 포함된 숫자나 특수 문자가 있으면 그대로 반환해야 합니다.
// 원래의 Rot13 "구현"에서처럼 라틴/영문 알파벳의 문자만 옮겨야 한다.

// for (const [input, expected] of [["test", "grfg"], ["Test", "Grfg"]]) {
//   assert.strictEqual(rot13(input), expected, `Test failed with messsage = '${input}'`);
// }

function rot13(message) {
  let arrange = [];

  for (let i = 97; i <= 122; i++) {
    arrange.push(String.fromCharCode(i));
  }

  return message
    .split("")
    .map((el) => arrange[arrange.indexOf(el) + 13])
    .join("");
}
