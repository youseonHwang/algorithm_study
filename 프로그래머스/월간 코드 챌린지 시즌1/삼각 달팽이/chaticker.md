1. 내려갈 때: n만큼
2. 오른쪽으로 갈 때: n-1만큼
3. 위쪽으로 갈 때: n-2만큼
4. n이 0보다 크면 반복
5. 2차원 배열을 1차원 배열로 바꾸고 리턴

```javascript
//프로그래머스 코드
function solution(n) {
  let answer = [];
  let x = 0,
    y = -1,
    num = 1;

  //모든 2차원 배열 요소를 0으로 우선 초기화
  for (let i = 1; i < n + 1; i++) {
    let tmp = Array(i).fill(0);
    answer.push(tmp);
  }

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      //밑으로 내려가는 건 n과 같음
      if (i % 3 === 0) {
        y += 1;
        //오른쪽으로
      } else if (i % 3 === 1) {
        x += 1;
        //왼쪽으로
      } else {
        y -= 1;
        x -= 1;
      }
      answer[y][x] = num;
      num += 1;
    }
  }

  console.log(answer);
  return answer;
}
```

---

![image](https://user-images.githubusercontent.com/23302973/150624003-bd34c214-d496-4954-ba24-9df5d5fce21c.png)

2차원 배열을 1차원 배열로 합치는 거 안 함 -> 할 예정

---
