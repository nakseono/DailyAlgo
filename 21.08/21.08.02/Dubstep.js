// 노래가 (WUB가 포함되지 않은) 몇 개의 단어로 구성되어 있다고 가정해 보겠습니다.
// Polycarpus는 이 곡의 더브스텝 리믹스를 만들기 위해 곡의 첫 단어 앞에 "WUB"라는 단어를 몇 개 삽입하고(숫자가 0일 수도 있음),
// 마지막 단어 뒤에, 그리고 단어 사이에 "WUB"를 포함한 모든 단어를 하나의 문자열에 붙입니다.

// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
// =>  WE ARE THE CHAMPIONS MY FRIEND

// songDecoder("AWUBBWUBC"), "A B C","WUB should be replaced by 1 space");
// songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C","multiples WUB should be replaced by only 1 space");
// songDecoder("WUBAWUBBWUBCWUB"), "A B C","heading or trailing spaces should be removed");

function songDecoder(song) {
  return song
    .split("WUB")
    .filter((e) => e !== "")
    .join(" ");
}

// <<- another solution ->>

function songDecoder(song) {
  return song.replace(/(WUB)+/g, " ").trim();
}

// 정규표현식을 사용해서 WUB이 들어간 부분은 공백으로 만들고, trim을 통해 앞 뒤 공백을 없앴다.
