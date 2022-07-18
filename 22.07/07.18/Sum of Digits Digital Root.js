// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit,
// continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// 각 자리 숫자를 더하라. 한 자리 숫자가 될 때까지.

// 숫자를 문자열로 바꾼 뒤 (toString)
// 해당 문자열을 한 글자씩 분리하고(split)
// 만들어진 배열의 한 글자씩 더한다(forEach?)
// 이후 해당 문자열의 길이를 체크하고 한자리수가 아닐 시 위의 내용을 반복. (while(n.length < 2))

function digital_root(n) {
  let num = n;
  let result = 0;

  num.toString().split("").forEach((e) => (result += Number(e)));

  return result < 10 ? result : digital_root(result);
}
