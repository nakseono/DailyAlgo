// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// 정수의 배열이 주어지면, 그 중에서 홀수 번 나온 숫자를 반환하라.
// 단, 홀수 개의 숫자는 하나만 존재한다.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  let cnt = 0;

  for (let i = 0; i < A.length; i++) {
    cnt = A.fitler((e) => e === A[i]).length;

    if (cnt % 2 === 1) {
      return A[i];
    }
  }
}
