// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num until you reach a single digit.

// 즉, 주어진 num이 한 자리 숫자가 되는데까지 필요한 횟수를 return하라.

function persistence(num) {
  let cnt = 0;

  while (num >= 10) {
    let arr = num.toString().split(""); // ["9","9","9"]
    num = 1;

    arr.forEach((e) => (num *= e));

    cnt++;
  }

  return cnt;
}

//! <-- 다른 사람의 풀이 -->

function persistence(num) {
  var times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }

  return times;
}

// 나는 애초에 각 원소를 분리했지만, 이 풀이는 map과 reduce를 사용했고, num.length를 이용했다.
// map과 reduce의 유용함을 아직 못 느껴서 그런것인지는 몰라도, 솔직히 나는 내 풀이가 더 좋아보인다.
// 다만 숫자를 바로 비교하는 것이 아니라 num.length > 1 로 조건을 건 것은 더 좋아보이긴 한다.
// 한 자리 숫자를 원하는 것이기 때문에, num >= 10 보다는 num.length > 1 가 더 문제에 적합해보인달까... (어차피 같은 것이긴 하지만..)
