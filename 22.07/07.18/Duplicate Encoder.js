// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


// 특정 문자열에서 해당 스펠링이 처음 나오면 (, 그게 아니라면 )을 반환하는 함수를 작성하라.
// 공백은 ( 로 표기된다? <- 여러개가 나오면?

function duplicateEncode(word){
  return word.toLowerCase().split("").map((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el) ? "(" : ")").join("")
}