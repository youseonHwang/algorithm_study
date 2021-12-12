코드 짜기 전에

- 1.  끝자리는 무조건 1, 2, 4 중에 하나로 끝남
- 2.  3으로 나누어 떨어질 경우, 4
- 3.  3으로 나눈 나머지가 1일 경우, 1
- 4.  3으로 나눈 나머지가 2일 경우, 2
- 5.  나눈 나머지 값을 다시 반복하기

```javascript
//repl 코드
let n = 4;
let answer = "";

while (n > 0) {
  if (n % 3 === 0) {
    answer = "4" + answer;
    n = n / 3 - 1;
  } else if (n % 3 === 1) {
    answer = "1" + answer;
    n = Math.floor(n / 3);
  } else {
    answer = "2" + answer;
    n = Math.floor(n / 3);
  }
}

console.log(answer);
```

```javascript
//프로그래머스 코드
function solution(n) {
  var answer = "";

  while (n > 0) {
    if (n % 3 === 0) {
      answer = "4" + answer;
      n = n / 3 - 1;
    } else if (n % 3 === 1) {
      answer = "1" + answer;
      n = Math.floor(n / 3);
    } else {
      answer = "2" + answer;
      n = Math.floor(n / 3);
    }
  }
  return answer;
}
```
