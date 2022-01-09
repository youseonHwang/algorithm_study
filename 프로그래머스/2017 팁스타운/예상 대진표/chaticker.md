코드 짜기 전에

1. a, b를 2로 나눈 몫(Math.ceil: 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자)이 같지 않으면 재귀
2. 카운트 증가

```javascript
function solution(n, a, b) {
  let answer = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
```
