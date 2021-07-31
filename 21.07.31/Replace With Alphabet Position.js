// "a" = 1, "b" = 2
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

// charCodeAt 하고, 그 숫자에 -64 한 것을 join하면 될 듯하다. (대문자 A는 아스키코드로 65, 대문자 Z는 90이다.)

function alphabetPosition(text) {
  let result = [];
  let arr = text
    .replace(/([^a-zA-Z])/g, "")
    .toUpperCase()
    .split("");

  arr.forEach((e) => result.push(e.charCodeAt() - 64));

  return result.join(" ");
}

// <-- 다른사람의 풀이 -->

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - 64)
    .join(" ");
}

// map 메서드의 중요성..
// 새로운 배열을 return한다는 것.
// 공백을 제거하는것도 아니고, 그냥 /[a-z]/gi - a부터 z까지 대소문자 구분 없이 매칭되는 것들만
// (사실 위에서 uppercase를 했기때문에 /[A-Z]/g 로만 써도 괜찮았을 것 같다.) map charCodeAt() - 64 로 숫자로 판별함.
