// 특정 문자가 word에 중복되어 들어있으면 )을 push, 없다면 (를 push해서 return.

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  let result = [];
  let splitWord = word.toLowerCase().split(""); // 비교가 쉽도록 소문자로 정렬하고, filter 정렬하도록 array로 바꿔준다.

  for (let i = 0; i < splitWord.length; i++) {
    let standard = splitWord.indexOf(splitWord[i]);
    if (splitWord.lastIndexOf(splitWord[i]) !== standard) {
      result.push(")");
    } else result.push("(");
  }

  return result.join("");
}

// <-- 다른사람의 풀이 -->

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

// map 함수를 이용해서 풀어냈다.
// 애초에 나처럼 기준 변수(standard)를 만들 필요도 없이 바로바로 비교해버리면 더 코드가 깔끔한 것 같다.
// join도 한번에 그냥 붙여버리는게 더 깔끔하다.
// map 함수에 대한 지식이 부족하다는 것을 알게되었다.
