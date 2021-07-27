//! Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//! <-- 해당 문제는 해결하지 못하였음. 한참 고민을 해도 답이 안나와서, 다른사람의 풀이를 보고 분석하기로 했음. -->

// #풀이 1 - 정규표현식 이용

function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}

// 인자를 전부 소문자로 바꾸고(toLowerCase), 배열로 바꾸고(split), 정렬해서(sort) 다시 문자열로 묶고(join) 비교를 한다.
// 여기서 나오는 정규표현식 /([^])\1+/g 은 중복되는 문자열(ee, ff 등등)을 표현한다.

// #풀이 2 - 정규표현식 미사용

function duplicateCount(text) {
  return text
    .toLowerCase()
    .split("")
    .filter(function (val, i, arr) {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}

// 소문자로 바꾸고(toLowerCase) 배열로 바꿔서(split) 필터를 건다.
// val, i, arr 이라는 인자를 던져서 특정 단어(val)의 첫번째 인덱스와 마지막 인덱스의 값이 같지 않은 경우의 수의 갯수를 반환. (인덱스가 i가 아닌경우 and 인덱스가 i인 경우)
// 순간적으로, 특정 단어(val)이 2개 이상 나오면 어떡하지? 라고 생각했지만, 어쨌든 맨 앞과 맨 마지막의 index를 비교하는것이므로 의미가 없는 고민이었다.
