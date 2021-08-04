// 영화 가격은 25달러이다. 사람들이 줄 서있는 순서대로만 티켓을 판매한다. 처음에는 돈을 가지고있지 않다.

// 모든 사람에게 티켓을 팔고 그 순간에 가지고있는 지폐로 거스름돈을 줄 수 있다면 YES return

// tickets([25, 25, 50]) // => YES
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

25;
25 - 25 - 25 - 75;

function tickets(peopleInLine) {
  let exchange = 0;

  for (let i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {
      exchange += 25;
    } else if (peopleInLine[i] === 50) {
      exchange += 50 - 25;
    } else if (peopleInLine[i] === 100) {
      exchange += 100 - 25;
    }
    if (exchange < 0) return "NO";
  }

  return "YES";
}

25, 25, 50, 100, 25, 50, 25, 100, 25, 25, 50, 100;

25;
25 + 50 - 25;

25;
