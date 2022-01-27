앞의 행렬의 행 X 뒤의 행렬의 열

1. 앞의 행렬의 행을 고정시키고
2. 뒤의 행렬의 열을 고정시켜
3. 각각 자리에 맞는 요소끼리 곱한 후 더해준다.

```javascript
function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    // 1. 행렬 arr1의 행 접근
    const row = arr1[i];
    answer.push([]);
    // 2. 행렬 arr2의 열 접근해서 곱하기
    //    행렬 arr2의 열 길이
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      // 3. 행렬 arr2의 행 길이
      //    arr2는 열을 고정해놓고 행을 이동하기
      for (let k = 0; k < arr2.length; k++) {
        sum += row[k] * arr2[k][j];
      }
      answer[i].push(sum);
    }
  }
  return answer;
}
```
