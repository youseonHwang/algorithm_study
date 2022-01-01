코드 짜기 전에

1. x1 행 y1 열부터 x2 행 y2 열까지의 영역에 해당하는 직사각형에서 테두리에 있는 숫자들을 한 칸씩 시계방향으로 회전

2. 중앙의 영역은 회전하지 않음

3. 각 회전들을 배열에 적용한 뒤, 그 회전에 의해 위치가 바뀐 숫자들 중 가장 작은 숫자들을 순서대로 배열에 담아 return

---

1. 왼쪽 행 -> (행-1, 열)
2. 위쪽 열 -> (행, 열+1)
3. 오른쪽 행 -> (행+1, 열)
4. 아래 열 -> (행, 열-1)

주의점: 겹치는 부분이 생길 수 있음
-> 배열에 따로 담아놨다가 값으로 리턴

---

```javascript
let rows = 6;
let columns = 6;
let queries = [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
];

//2차원 배열 생성
let arr = Array.from(Array(rows), () => Array(columns).fill(0));

//숫자 순서 채우기
var num = 0;
for (var i = 0; i < rows; i++) {
  for (var j = 0; j < columns; j++) {
    num = num + 1;
    arr[i][j] = num;
  }
}

console.log(arr);
```
