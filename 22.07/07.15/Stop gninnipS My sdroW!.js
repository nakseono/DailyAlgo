// Write a function that takes in a string of one or more words, and returns the same string,
// but with all five or more letter words reversed (Just like the name of this Kata).
//Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

// 각 문장에서 5글자 이상의 스펠링을 가진 단어는 뒤집어서 문자열을 반환하라.

// String.split() 을 통해 각 단어를 분리하고, 배열로 바뀐 해당 문자열을 map을 통해 바꾸고, map함수를 통해 나온 새로운 함수를 join() 으로 return한다.

function spinWords(string) {
  return string
    .split(" ")
    .map((e) => {
      if (e.length >= 5) {
        return e.split("").reverse().join("");
      }
      return e;
    })
    .join(" ");
}
