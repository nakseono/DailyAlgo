// 피보나치와 비슷한 함수.
// 앞 3자리를 더해서 현재 n이 나옴.
// 처음 input은 3개의 원소를 가진 배열이 들어오고, n의 개수만큼의 index가 있는 배열을 return.

// 만약 n이 0이면 빈 배열을 return.

// tribonacci([1,1,1],10),[1,1,1,3,5,9,17,31,57,105])
// tribonacci([0,0,1],10),[0,0,1,1,2,4,7,13,24,44])
// tribonacci([0,1,1],10),[0,1,1,2,4,7,13,24,44,81])
// tribonacci([1,0,0],10),[1,0,0,1,1,2,4,7,13,24])
// tribonacci([0,0,0],10),[0,0,0,0,0,0,0,0,0,0])
// tribonacci([1,2,3],10),[1,2,3,6,11,20,37,68,125,230])
// tribonacci([3,2,1],10),[3,2,1,6,9,16,31,56,103,190])
// tribonacci([1,1,1],1),[1])
// tribonacci([300,200,100],0),[])
// tribonacci([0.5,0.5,0.5],30),[0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5])

function tribonacci(signature, n) {
  let arr = [];

  if (n < 3) {
    return signature.slice(0, n);
  }
  signature.forEach((e) => arr.push(e));
  for (let i = 3; i < n; i++) {
    arr.push(arr[i - 3] + arr[i - 2] + arr[i - 1]);
  }

  return arr;
}

// <<- another solution ->>

function tribonacci(signature, n) {
  for (var i = 0; i < n - 3; i++) {
    // iterate n times
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}

// 애초에 signature에다가 넣어두고 나중에 slice해서 작업하는구나..
