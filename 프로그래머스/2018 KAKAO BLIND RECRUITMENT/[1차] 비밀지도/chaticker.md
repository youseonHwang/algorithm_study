코드 짜기 전에

1. 각 배열 2진수로 변환 -> toString 사용(n의 길이에 맞춰 0 추가 필요)
2. 변환한 값을 나누고 0이면 공백, 1이면 #으로 치환해서 합치기
3. 모든 합친 값을 새로운 배열에 넣기

```javascript
//repl 처음 코드
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];
let n = 5;

const new1 = getNewArr(arr1);
const new2 = getNewArr(arr2);

//굳이 이렇게 따로 안 하고 함수 안에서 바로 하려고 바꿈 👇🏻

function getNewArr(arr) {
  let newArr = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toString(2).padStart(n, "0").split(""));
    for (let j = 0; j < newArr[i].length; j++) {
      if (newArr[i][j] === "0") {
        newArr[i][j] = " ";
      }
      if (newArr[i][j] === "1") {
        newArr[i][j] = "#";
      }
    }
    result.push(newArr[i]);
  }
  return result;
}
```

```javascript
//repl 두 번째 코드
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];
let n = 5;

let newArr1 = [];
let newArr2 = [];
let answer = [];
for (let i = 0; i < n; i++) {
  newArr1 = arr1[i].toString(2).padStart(n, "0").split("");
  newArr2 = arr2[i].toString(2).padStart(n, "0").split("");
  console.log("newArr1", newArr1);
  console.log("newArr2", newArr2);

  let str = "";
  for (let j = 0; j < n; j++) {
    if (newArr1[j] === "0" && newArr2[j] === "0") {
      str += " ";
    } else {
      str += "#";
    }
  }
  answer.push(str);
}
console.log(answer); //[ '#####', '# # #', '### #', '#  ##', '#####' ]
```

```javascript
//프로그래머스 코드
function solution(n, arr1, arr2) {
  let newArr1 = [];
  let newArr2 = [];
  let answer = [];
  for (let i = 0; i < n; i++) {
    newArr1 = arr1[i].toString(2).padStart(n, "0").split("");
    newArr2 = arr2[i].toString(2).padStart(n, "0").split("");

    let str = "";
    for (let j = 0; j < n; j++) {
      if (newArr1[j] === "0" && newArr2[j] === "0") {
        str += " ";
      } else {
        str += "#";
      }
    }
    answer.push(str);
  }
  return answer;
}
```
