코드 짜기 전에

- 규칙을 모르겠어서 찾아봤더니 최대공약수를 빼는 문제
- 공식이 따로 있음: W + H - (W, H의 최대 공약수)
- 최대공약수 구하는 법: 유클리드호제법
  -> W 와 H를 나눈 값의 나머지가 0이 나올때 까지 반복하여 0이 나올 경우, 0이 나올 수 있었던 H를 반환하는 방법

```javascript
// 유클리드 호제법을 이용한 최대 공약수 구하기
function gcd(w, h) {
  // W와 H의 나머지
  const mod = w % h;
  // 만약 나머지가 0일 경우 H를 반환
  if (mod === 0) {
    return h;
  }
  // 만약 0이 아닐경우 W에 H를 넣고 H에 나머지인 mod를 넣어 해당 함수를 다시 호출
  return gcd(h, mod);
}

function solution(w, h) {
  // 최대 공약수 구하기
  const gcdVal = gcd(w, h);

  return w * h - (w + h - gcdVal);
}
```

공식을 알고있었으면 풀 수 있었던 문제,,
