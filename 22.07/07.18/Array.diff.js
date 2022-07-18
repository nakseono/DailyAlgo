// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// 주어지는 두 배열의 차이를 배열로 반환하라.

function arrayDiff(a, b) {
  let result = [];

  a.forEach((e) => {
    if (!b.includes(e)) {
      result.push(e);
    }
  });

  return result;
}
