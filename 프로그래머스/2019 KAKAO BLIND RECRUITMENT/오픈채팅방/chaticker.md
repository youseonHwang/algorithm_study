코드 짜기 전에

1. Enter, Leave, Change 각 상태와 관련되게 변경
2. change의 경우는 uid에 맞는 name을 변경 해줘야함
   -> map 사용해서 중복되는 uid의 name 변경
3. Enter, Leave의 경우는 변경 필요 없음

처음에 배열에 있는 문자열을 하나씩 빼서 비교하고 임시 배열에 넣어 uid랑 name을 비교하는 과정을 반복했는데, 너무 비효율적이라고 생각해서 찾아봤더니 map을 사용하는 걸 알게됨 -> 안 보고 다시 풀어보기

```javascript
//repl 코드
let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

let answer = [];
let map = new Map();

for (let i = 0; i < record.length; i++) {
  //나눈 값 매칭 시켜서 넣음
  let [state, uid, name] = record[i].split(" ");
  if (state === "Enter") {
    answer.push([uid, "님이 들어왔습니다."]);
  }
  if (state === "Leave") {
    answer.push([uid, "님이 나갔습니다."]);
  }
  //uid를 이용해 value를 새롭게 업데이트(key, value)
  map.set(uid, name);
}
//uid를 통해 name에 접근
//map.get(key) – key에 해당하는 값을 반환
console.log(answer.map((data) => map.get(data[0]) + data[1]));
console.log("answer", answer);

/*
output
[ 'Prodo님이 들어왔습니다.',
  'Ryan님이 들어왔습니다.',
  'Prodo님이 나갔습니다.',
  'Prodo님이 들어왔습니다.' ]
answer [ [ 'uid1234', '님이 들어왔습니다.' ],
  [ 'uid4567', '님이 들어왔습니다.' ],
  [ 'uid1234', '님이 나갔습니다.' ],
  [ 'uid1234', '님이 들어왔습니다.' ] ]
*/
```

```javascript
//프로그래머스 코드
function solution(record) {
  let answer = [];
  let map = new Map();

  for (let i = 0; i < record.length; i++) {
    let [state, uid, name] = record[i].split(" ");
    if (state === "Enter") {
      answer.push([uid, "님이 들어왔습니다."]);
    }
    if (state === "Leave") {
      answer.push([uid, "님이 나갔습니다."]);
      continue; //추가
    }
    map.set(uid, name);
  }
  return answer.map((data) => map.get(data[0]) + data[1]);
}
```

![image](https://user-images.githubusercontent.com/23302973/143026383-5b55726f-8523-478d-8562-29c94ad00fc0.png)
왜?

나갔을 때는 새롭게 업데이트 해주지 않기 때문에 continue 추가 해줘야함
