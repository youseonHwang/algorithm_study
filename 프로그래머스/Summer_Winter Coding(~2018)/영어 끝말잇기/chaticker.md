코드 짜기 전에

- words 배열 길이만큼 조건 체크
- 조건1) 같은 단어 안됨: 이미 넘어간 단어를 새로운 배열에 넣고 중복 체크
- 조건2) 한 글자 안됨
- 조건3) 앞 단어의 끝 글자가 현재 단어의 앞 글자가 되어야함: 가장 최근 넘어간 단어를 저장해두고, 현재 진행 중인 단어와 비교
- 위의 조건을 만족하지 못하면 현재 몇 번째 플레이어인지, 몇 번째 반복중인지 계산해서 리턴

```javascript
//repl 코드
let n = 3;
let words = [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
];

function solution(n, words) {
  let pastArr = []; //이전 글자들 담을 배열
  let answer = [0, 0];

  pastArr.push(words[0]); //한 개는 미리 넣기

  for (let i = 1; i < words.length; i++) {
    let before = words[i - 1]; //이전 글자
    let current = words[i]; //현재 글자
    //한 글자 아니고, 중복 아니고, 이전단어의 맨 뒷글자와 현재단어의 맨 앞글자가 같다면
    if (
      words[i].length != 1 &&
      pastArr.indexOf(words[i]) === -1 &&
      before[before.length - 1] === current[0]
    ) {
      pastArr.push(words[i]);
    } else {
      //조건을 만족하지 못할 경우의 값 리턴
      let player = (i % n) + 1;
      let turn = parseInt(i / n) + 1;
      return (answer = [player, turn]);
    }
  }
  return answer; //탈락자 없을 경우 기존 값 그대로 리턴 [0, 0]
}

const result = solution(n, words);
console.log(result); // [3, 3]
```

```javascript
//프로그래머스 코드
function solution(n, words) {
  let pastArr = []; //이전 글자들 담을 배열
  let answer = [0, 0];

  pastArr.push(words[0]); //한 개는 미리 넣기

  for (let i = 1; i < words.length; i++) {
    let before = words[i - 1]; //이전 글자
    let current = words[i]; //현재 글자
    //한 글자 아니고, 중복이 아니고, 이전단어의 맨 뒷글자와 현재단어의 맨 앞글자가 같다면
    if (
      words[i].length != 1 &&
      pastArr.indexOf(words[i]) === -1 &&
      before[before.length - 1] === current[0]
    ) {
      pastArr.push(words[i]);
    } else {
      //조건을 만족하지 못할 경우의 값 리턴
      let player = (i % n) + 1;
      let turn = parseInt(i / n) + 1;
      return (answer = [player, turn]);
    }
  }
  return answer; //탈락자 없을 경우 기존 값 그대로 리턴 [0, 0]
}
```

![image](https://user-images.githubusercontent.com/23302973/140935509-6eecf10d-bc7e-4062-9073-1751ffa0c1cc.png)
