// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// 배열 안에 0이 들어있다면 배열의 맨 뒤로 보낸다. 단, 나머지의 순서는 그대로..

function moveZeros(arr) {
  let result = [];
  let cnt = 0;

  arr.forEach((el) => {
    el === 0 ? cnt++ : result.push(el);
  });

  while (cnt > 0) {
    result.push(0);
    cnt--;
  }

  return result;
}

// 위 함수는 원초적으로? 풀면 저렇고..
// 좋은 답변은 concat을 이용하는 것 같다.
// concat은 array를 합치는 메서드 이므로, 앞에는 0이 아닌 array를, 뒤쪽에 0인 array를 filter를 걸어서 더해주면 되겠다.

function moveZeros(arr) {
  return arr.filter((el) => el !== 0).concat(arr.filter((el) => el === 0));
}
