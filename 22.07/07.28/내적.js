// 문제 : https://school.programmers.co.kr/learn/courses/30/lessons/70128

// 풀이 1번 - for 문 사용.
function solution(a, b) {
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}

// 풀이 2번 - reduce 사용. -> reduce를 잘 익히는게 중요한 것 같다. 효율적으로 쓰기 너무 좋은듯?

function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
