// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// 요구 조건 :
// 각 숫자에 0("0")9("9")에서 문제가 있는 기능이다.
// 다음 수학 기능 : Plus, Minus, times(곱하기),dividedBy(나누기).
// 각각의 계산 정확하게 한 수술과 두 숫자로 구성되어 있다.
// 가장 외부 기능은 가장 내부 기능 오른쪽 피연산자를 나타내는 왼쪽 피연산자를 나타내는입니다.
// 정수를 반환해야한다. 2.66666 이 아니라 2를 return 하도록.

function zero() {}
function one() {}
function two() {}
function three() {}
function four() {}
function five() {}
function six() {}
function seven() {}
function eight() {}
function nine() {}

function plus() {}
function minus() {}
function times() {}
function dividedBy() {}

// 각각 상호작용을 해야하므로, -> 예를 들어, eight(minus(three())) 라는 식을 실행시키려면 eigth 이전에 three() 가 3을 return 시켜야 하는 것.
// 그러므로 만약 인자가 들어오지 않으면, 그 함수에 해당하는 숫자를 return 해줘야 할 것 같다.

(funOrNum) => {
  if (!funOrNum) {
    return "특정 숫자";
  } else {
    funOrNum;
  }
};
// }
// 이런 느낌 ?
