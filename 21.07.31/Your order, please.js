// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// 아마도 각 단어 내에 포함되어있는 숫자 순서대로 배열하라는 것 같다.
// 공백이면 공백을 return하고.
// split(" ") 해서 각각 분리를 해주자.
// 그리고 각 단어의 스펠링을 검사해서 1부터 차례대로 result에 push
// join(" ") 하면 되겠지?

function order(words) {
  let result = [];
  let strings = words.split(" ");

  for (let i = 0; i < strings.length; i++) {
    for (let k = 0; k < strings.length; k++) {
      if (strings[k].includes(i + 1)) {
        result.push(strings[k]);
      }
    }
  }

  return result.join(" ");
}

// <<- another solution ->>

function order(words) {
  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}

// 어.. 정규표현식을 이렇게 활용할 줄은 몰랐다.
// 똑같이 split을 하되, 정규표현식을 이용해 각 단어에서 숫자만을 걸러낸 후 그 숫자를 기준으로 정렬한다...
// 이러한 방법이 훨씬 더 좋다. 여전히 정규표현식은 어렵다..
