1. s에서 0의 개수 카운트 및 1만 남기기
2. 1만 남은 s를 이진수로 변환한 후 반복

---

```javascript
function solution(s) {
  var answer = [0, 0];

  while (s != "1") {
    let len = s.match(/1/g).length; // 1의 개수
    answer[0]++; // 회차 증가
    answer[1] += s.length - len; // 0의 개수 더하기
    s = len.toString(2); // 이진수로 변환
  }

  return answer;
}
```
