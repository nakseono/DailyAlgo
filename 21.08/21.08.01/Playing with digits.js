// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// n에는 제곱을 할 숫자가 들어있고, p에는 그 제곱을 시작할 숫자가 담겨있다.
// 그렇게 다 제곱한 수를 더한 수를 n으로 나눴을 때 나오는 숫자를 return.

function digPow(n, p) {
  let nums = n.toString().split("");
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += Math.pow(nums[i], p + i);
  }

  return Number.isInteger(sum / n) ? sum / n : -1;
}

// <<- another solution ->>

function digPow(n, p) {
  var x = String(n)
    .split("")
    .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
  return x % n ? -1 : x / n;
}

// 아이디어 자체는 비슷한 것 같은데, reduce를 사용하는 것과 reduce에서 d와 i의 사용방법? 이 미숙해서 위와같이 간결하게 코드 작성을 못했던 것 같다.
// 그치만 나름 만족스럽게 풀었다 :)
