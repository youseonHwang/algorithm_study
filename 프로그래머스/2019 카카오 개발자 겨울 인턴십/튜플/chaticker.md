1. s 내 가장 짧은 길이의 문자열부터 시작하도록 지정
2. 그 다음 긴 문자열의 가장 뒤의 값을 추가
3. 2번 과정 반복

---

```javascript
// repl 코드
let s = "{{2},{2,1},{2,1,3,4},{2,1,3}}";

// 맨 앞 {{, 맨 뒤 }} 삭제하고 },{ 기준으로 잘라 배열에 넣음
let strList = s.replace("{{", "").replace("}}", "").split("},{");
// [ '2', '2,1', '2,1,3', '2,1,3,4' ]

// 배열로 한 번 더 감싸기
let strArr = [];
for (let i = 0; i < strList.length; i++) {
  strArr.push(strList[i].split(","));
}

// 배열 길이 순으로 정렬 -> 순서대로 정답 배열에 넣기 위함
let arr = [];
strArr.sort((a, b) => a.length - b.length);
// console.log(strArr);

// 첫 번째 값 먼저 answer에 넣고, answer에 없는 값 차례대로 넣기
const answer = strArr.reduce((acc, subset) => {
  console.log(acc, subset);
  const val = subset.filter((a) => !acc.includes(a))[0];
  acc.push(val);
  return acc;
}, []);

console.log("answer", answer); //[ '2', '1', '3', '4' ]
```

```javascript
// 프로그래머스 코드
function solution(s) {
  let strList = s.replace("{{", "").replace("}}", "").split("},{");
  let strArr = [];

  for (let i = 0; i < strList.length; i++) {
    strArr.push(strList[i].split(","));
  }

  let arr = [];
  strArr.sort((a, b) => a.length - b.length);

  const answer = strArr.reduce((acc, subset) => {
    const val = subset.filter((a) => !acc.includes(a))[0];
    acc.push(val);
    return acc;
  }, []);

  return answer;
}
```

---

![image](https://user-images.githubusercontent.com/23302973/152644551-d0694e8c-96ce-4bac-83be-55026ed70150.png)

문자열 형태 안 바꿔서 바꿔줌

---

```javascript
// 프로그래머스 코드
function solution(s) {
  let strList = s.replace("{{", "").replace("}}", "").split("},{");
  let strArr = [];

  for (let i = 0; i < strList.length; i++) {
    strArr.push(strList[i].split(","));
  }

  let arr = [];
  strArr.sort((a, b) => a.length - b.length);

  const answer = strArr.reduce((acc, subset) => {
    const val = subset.filter((a) => !acc.includes(a))[0];
    acc.push(val);
    return acc;
  }, []);

  return answer.map((v) => Number(v));
}
```
