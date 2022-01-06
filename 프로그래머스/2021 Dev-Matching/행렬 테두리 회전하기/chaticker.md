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
//repl 코드
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

let answer = [];
//각 행, 열 관련 for문 돌리면서 해당 값들 answer에 넣기
for (let i = 0; i < queries.length; i++) {
  let [r1, c1, r2, c2] = queries[i];
  //인덱스에 해당하는 값 맞추기 위함
  r1--, c1--, r2--, c2--;
  //arr[r1][c1] 값은 겹치기 때문에 따로 빼두기
  let temp_data = arr[r1][c1];
  console.log(temp_data);
  let temp = [];

  //1. 왼쪽 행 -> (행-1, 열)
  for (let i = r2; i > r1; i--) temp.push(arr[i - 1][c1]);
  //2. 위쪽 열 -> (행, 열+1)
  for (let i = c1; i < c2; i++) temp.push(arr[r1][i + 1]);
  //3. 오른쪽 행 -> (행+1, 열)
  for (let i = r1; i < r2; i++) temp.push(arr[i + 1][c2]);
  //4. 아래 열 -> (행, 열-1)
  for (let i = c2; i > c1; i--) temp.push(arr[r2][i - 1]);
  arr[r1][c1 + 1] = temp_data;
  //위에 넣은 값들 중에 최소값 찾기
  answer.push(Math.min(...temp));
}
console.log("answer", answer); //answer [ 8, 15, 25 ]
```

```javascript
//프로그래머스 코드
function solution(rows, columns, queries) {
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

  let answer = [];
  //각 행, 열 관련 for문 돌리면서 해당 값들 answer에 넣기
  for (let i = 0; i < queries.length; i++) {
    let [r1, c1, r2, c2] = queries[i];
    //인덱스에 해당하는 값 맞추기 위함
    r1--, c1--, r2--, c2--;
    //arr[r1][c1] 값은 겹치기 때문에 따로 빼두기
    let temp_data = arr[r1][c1];
    let min_data = temp_data;
    let temp = [];

    //1. 왼쪽 행 -> (행-1, 열)
    for (let i = r2; i > r1; i--) {
      temp.push(arr[i - 1][c1]);
    }
    //2. 위쪽 열 -> (행, 열+1)
    for (let i = c1; i < c2; i++) {
      temp.push(arr[r1][i + 1]);
    }
    //3. 오른쪽 행 -> (행+1, 열)
    for (let i = r1; i < r2; i++) {
      temp.push(arr[i + 1][c2]);
    }
    //4. 아래 열 -> (행, 열-1)
    for (let i = c2; i > c1; i--) {
      temp.push(arr[r2][i - 1]);
    }

    arr[r1][c1 + 1] = temp_data;
    //위에 넣은 값들 중에 최소값 찾기
    answer.push(Math.min(...temp));
  }
  return answer;
}
```

![image](https://user-images.githubusercontent.com/23302973/148219857-84d33a32-fd79-429c-9cae-b8800417f9a0.png)

조건이 잘못된 거 같은데 다시 해보기

---

```javascript
function solution(rows, columns, queries) {
  let arr = Array.from(Array(rows), () => Array(columns).fill(0));

  var num = 0;
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
      num = num + 1;
      arr[i][j] = num;
    }
  }

  let answer = [];

  for (let i = 0; i < queries.length; i++) {
    let [r1, c1, r2, c2] = queries[i];
    r1--, c1--, r2--, c2--;
    let temp_data = arr[r1][c1];
    const temp = [temp_data];

    for (let i = r1; i < r2; i++) {
      temp.push((arr[i][c1] = arr[i + 1][c1]));
    }
    for (let j = c1; j < c2; j++) {
      temp.push((arr[r2][j] = arr[r2][j + 1]));
    }
    for (let i = r2; i > r1; i--) {
      temp.push((arr[i][c2] = arr[i - 1][c2]));
    }
    for (let j = c2; j > c1; j--) {
      temp.push((arr[r1][j] = arr[r1][j - 1]));
    }
    arr[r1][c1 + 1] = temp_data;

    answer.push(Math.min(...temp));
  }
  return answer;
}
```
