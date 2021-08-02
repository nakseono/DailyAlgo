// 정수의 배열이 주어질 것입니다.
// 이 배열을 사용하여 N의 왼쪽에 있는 정수의 합이 N의 오른쪽에 있는 정수의 합과 같은 인덱스 N을 찾습니다.
// 이 작업을 수행할 인덱스가 없으면 -1을 반환합니다.

// findEvenIndex([1,2,3,4,3,2,1]) 3
// findEvenIndex([1,2,3,4,5,6]) -1
// findEvenIndex([20,10,30,10,10,15,35]) 3
// findEvenIndex([1,100,50,-51,1,1]) 1

function findEvenIndex(arr) {
  let front = 0;
  let back = 0;
  let result = 0;

  for (let i = 0; i < arr.length / 2; i++) {
    front += arr[i];
    back += arr[arr.length - 1 - i];
    if ((front = back)) {
      result = i;
    }
  }

  return result;
}

// <<- another solution ->>

function findEvenIndex(arr) {
  var left = 0,
    right = arr.reduce(function (pv, cv) {
      return pv + cv;
    }, 0);
  for (var i = 0; i < arr.length; i++) {
    if (i > 0) left += arr[i - 1];
    right -= arr[i];

    if (left == right) return i;
  }

  return -1;
}
