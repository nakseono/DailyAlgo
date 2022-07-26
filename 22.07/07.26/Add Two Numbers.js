// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

var addTwoNumbers = function (l1, l2) {
  // 배열 두개가 주어지는데, 맨 앞에 한자리씩 더해서 다 더한 값을 리턴하라.
  // 0이 들어있는 배열이 두개면 0을 리턴하라.
  // 그냥 두개 숫자로 더하고 reverse 하면 될 것 같은데..?

  if (l1 === [0] && l2 === [0]) return [0];

  if(l1 === []) return l2;
  if(l2 === []) return l1;

  return String(
    parseInt(l1.reverse().join("")) + parseInt(l2.reverse().join(""))
  )
    .split("")
    .map((el) => parseInt(el));
};
