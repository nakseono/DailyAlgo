// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

// 특정 문자열이 주어지면, 다른 문자들과 다른 짝수 or 홀수 문자의 위치를 반환. (index + 1)

function iqTest(numbers) {
  let arr = numbers.split(" ");
  let odd = arr.filter((e) => e % 2 === 1);
  let even = arr.filter((e) => e % 2 === 0);

  return odd.length === 1 ? arr.indexOf(odd[0]) + 1 : arr.indexOf(even[0]) + 1;
}

// <<- Another Solution ->>

function iqTest(numbers) {
  numbers = numbers.split(" ").map(function (el) {
    return parseInt(el);
  });

  var odd = numbers.filter(function (el) {
    return el % 2 === 1;
  });
  var even = numbers.filter(function (el) {
    return el % 2 === 0;
  });

  return odd.length < even.length
    ? numbers.indexOf(odd[0]) + 1
    : numbers.indexOf(even[0]) + 1;
}

// 나랑 풀이가 거의 같다..
// 세상 뿌듯!
