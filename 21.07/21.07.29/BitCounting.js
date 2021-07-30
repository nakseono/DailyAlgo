// 주어지는 숫자 n을 2진수로 바꿔서 나오는 숫자 중 1의 개수를 반환하라.

// 1234 is 10011010010, so the function should return 5
// 0 = 0
// 4 = 1
// 7 = 3
// 9 = 2
// 10 = 2

var countBits = function (n) {
  return n
    .toString(2)
    .split("")
    .filter((e) => e === "1").length;
};

// 다른사람의 풀이

countBits = (n) => n.toString(2).split("0").join("").length;

// 아 split을 0으로 하면 0은 다 날아가니까 상관없구나...
