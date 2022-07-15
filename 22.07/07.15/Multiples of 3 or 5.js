// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, 
// if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

// 주어진 숫자 이하에서 3 또는 5의 배수인 숫자의 합을 구하라.
// 3과 5의 공통 배수는 한번만 세라.

// for 문으로 0부터 number까지 돌리되 3이나 5로 나뉘어지면 result += 해주고, 마지막에 return result 해주면 될 듯.

function solution(number){
  let result = 0;

  for(let i = 0; i < number; i++){
    if(i % 3 === 0 || i % 5 === 0){
      result += i;
    }
  }

  return result;
}