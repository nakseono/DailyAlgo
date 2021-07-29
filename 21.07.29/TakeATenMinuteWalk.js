// 당신은 카르테시아의 모든 도로가 완벽한 격자망으로 펼쳐져 있는 도시에 살고 있습니다.
// 약속 시간보다 10분 일찍 도착하셔서 잠깐 산책을 나가기로 하셨네요.
// 이 도시는 시민들에게 휴대폰에 Walk Generating App을 제공합니다.
// 버튼을 누를 때마다 보행 방향을 나타내는 문자열이 한 줄로 배열되어 있습니다(예: ['n', 's', 'w', 'e'])
// 각 문자(방향)에 대해 항상 한 블록씩만 걷고,
// 한 도시 블록을 이동하는 데 1분이 걸리므로 앱이 제공하는 도보로 정확히 10분(이른 시간 또는 늦은 시간)이 소요되고,
// 물론 시작 지점으로 되돌아가는 기능을 만듭니다. 그렇지 않으면 false를 반환하십시오.

// 참고: 임의의 방향 문자 집합('n', 's', 'e' 또는 'w'만 포함)이 포함된 유효한 배열이 항상 수신됩니다.
// 빈 배열은 절대 제공하지 않습니다(걸음이 아니라 가만히 서 있습니다!).

// ['n','s','n','s','n','s','n','s','n','s']), 'should return true'
// ['w']), 'should return false' //
// ['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false' // 제자리로 돌아왔지만 10분보다 더 걸렸으므로 false

// ['n', 's', 'w', 'e'] 등의 문자열이 한 줄로 배열되어 있고,

// 제자리로 돌아오는지 확인해야 함.
// 카운트... 를 해야하나?

function isValidWalk(walk) {
  let leng = walk.length;

  if (leng > 10 || leng < 10) {
    return false;
  } else {
    if ((walk[0] = walk[9])) {
      return false;
    }
    return true;
  }
}

// 다른 사람의 풀이

function isValidWalk(walk) {
  const north = walk.filter(item => { return item === "n" }).length;
  const south = walk.filter(item => { return item === "s" }).length;
  const east = walk.filter(item => { return item === "e" }).length;
  const west = walk.filter(item => { return item === "w" }).length;
  
  return walk.length === 10 && north === south && east === west;
}

// 제자리로 돌아오는지 카운트하기 위해 n과 s의 값이 같은지(앞으로 갔다가 뒤로 오려면 갯수가 같아야지.) e와 w의 값이 같은지(같은 이유) 체크했다.
// 길이가 같아야 한다는 아이디어가 부족했던 것 같다.