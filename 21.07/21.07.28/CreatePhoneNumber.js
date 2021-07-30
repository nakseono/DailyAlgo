// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers) {
  let first = numbers.splice(0, 3).join("");
  let second = numbers.splice(0, 3).join("");
  let third = numbers.join("");

  return `(${first}) ${second}-${third}`;
}

// splice 사용하면 지정한 숫자만큼을 return하며, 원본 배열에서 return한 수를 제거한다.
// 이것을 이용하면 첫 숫자와 두 번째 숫자, 세 번째 숫자를 넘길 수 있다!

// 다른 사람의 풀이

function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}

// replace를 이렇게 사용하는것도 가능하다는것을 알았다..
