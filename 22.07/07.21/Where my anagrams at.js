// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list.
// You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

// Note for Go
// For Go: Empty string slice is expected when there are no anagrams found.

// word가 주어지고, words 라는 배열이 주어지는데 words 중에서 word와 스펠링 순서만 다른 words 를 찾아서 배열로 반환하라. 없으면 빈배열!
// result 빈 배열 만들고,
// words 배열 각 index를 정렬. 이후 하나하나 word랑 같은지 비교 후 해당 index를 result에 push

function anagrams(word, words) {
  let result = [];
  let compareWord = word.split("").sort().join("");

  console.log(`compareWord : ${compareWord}`);

  words.forEach((el) =>
    el.split("").sort().join("") === compareWord ? result.push(el) : ""
  );

  return result;
}
