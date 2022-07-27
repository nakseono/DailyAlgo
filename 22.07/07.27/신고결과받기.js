// problem : https://school.programmers.co.kr/learn/courses/30/lessons/92334?language=javascript

// 한번에 한 명의 유저 신고. 여러번 할수도있는데, 동일한 유저면 1번만 따짐.
// k번 이상 신고되면 정지되며 해당 유저를 신고한 유저에게 메일이 발송됨.
// report 배열에는 신고한 유저, 신고를 당한 유저가 "A B" 형태로 들어가있다.
// result에는 id_list에 있는 유저 순서대로 받은 메일 수를 정렬하라.

// report의 각 index 중 arr[0].split(" ")[1] 로 하면 신고당한 유저만 남아있음.
// 그럼 for문으로 id_list의 id와 같은 list만 filter로 걸고 각 length를 result에 push하면 될 듯.

// k가 넘어야만 메일이 간다.
// 그러니까, ...new Set() 으로 중복을 제거해버리고, arr[0].split(" ")[1]로 신고당한 유저를 정렬 및 k개 이상인 애들만 남김. -> arr.filter((el,i,arr) => arr[i] === el)

function solution(id_list, report, k) {
  var answer = [];

  let notZero = [...new Set(report)]; // 여러번의 신고도 한번의 신호로 합쳐진다.

  let overKperson = id_list.filter(
    (el) => notZero.filter((inEl) => inEl.split(" ")[1] === el).length >= k
  );
  // 이러면 id_list 중에서 k번 이상 신고당한 사람의 모임. ['frodo', 'neo']

  // id_list = ["muzi", "frodo", "apeach", "neo"]
  // notZero = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
  // overKperson = ['frodo', 'neo']

  // 각 사람 별 메일 받은 횟수를 구해야하니까 하나씩 검색해보는건 맞음.
  // 그러면 notZero.split(" ")[1] === overKperson[i] 인 애들. 즉, 메일을 보내야 할 애들을 걸러내고
  // ["muzi frodo","apeach frodo","frodo neo","muzi neo"]
  // 이 중에서 .split(" ")[0] === id_list.forEach() ~~ 인 애들의 숫자를 answer에 하나씩 push.

  id_list.forEach((el) =>
    overKperson.forEach((username) =>
      notZero.filter(
        (inEl) => inEl.split(" ")[1] === username && inEl.split(" ")[0] === el
      )
    )
  );

  return answer;
}

//! 결국 풀지 못하고 답을 보았다.

// 참고 : https://ko.javascript.info/map-set

function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });
  // 중복을 제거하고, map을 통해 하나씩 다 분리한다.
  // = [['muzi', 'frodo'], ['apeach', 'frodo'], ['frodo', 'neo'], ['muzi', 'neo'], ['apeach', 'muzi']]

  let counts = new Map();
  // Map 생성

  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1); 
  }
  // Map.set 은 객체에 값을 저장하는 방법이다.
  // counts = {'frodo' => 2, 'neo' => 2, 'muzi' => 1}

  let good = new Map();

  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }

  let answer = id_list.map((a) => good.get(a) || 0);

  return answer;
}
