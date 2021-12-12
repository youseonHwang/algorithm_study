```javascript
//repl 코드
let s = "one4seveneight";

const num = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

let str = s;

for (let i in num) {
  // 정규식에 변수를 넣어 사용하기 위해 new RegExp로 정규식 작성
  // "g" : 문자열 전체에서 확인한다는 의미
  str = str.replace(new RegExp(`${num[i]}`, "g"), i);
}

console.log(str); //1478
```

```javascript
//프로그래머스 코드
function solution(s) {
  const num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let str = s;

  for (let i in num) {
    str = str.replace(new RegExp(`${num[i]}`, "g"), i);
  }
  return parseInt(str); // string 타입이라 오류 나서 parseInt 사용
}
```
