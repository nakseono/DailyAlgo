// 특정 배열이 주어지면, 연속으로 이어지는 수들을 지워서 return하는 문제.

var uniqueInOrder = function (iterable) {
  let arr = iterable
    .toString()
    .split("")
    .filter((e) => e !== ",");
  let result = [];
  let resultNum = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
  }

  if (!isNaN(iterable[0])) {
    arr.forEach((e) => resultNum.push(Number(e)));
    return [...new Set(resultNum)];
  }

  return result;
};

// <<- another Solution ->>

function uniqueInOrder(it) {
  var result = [];
  var last;

  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push((last = it[i]));
    }
  }

  return result;
}

// 이게 무슨내용인가.....
// 특정 배열이 들어옴. 배열의 각 index에 대해서 last와 같지 않으면(처음엔 last = undefined)
// result에 it[i]를 넣음. <- 이 때 last의 값이 바뀌네...
