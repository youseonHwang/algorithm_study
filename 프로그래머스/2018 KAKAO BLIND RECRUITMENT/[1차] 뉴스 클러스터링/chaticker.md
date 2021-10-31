코드 짜기 전에
![image](https://user-images.githubusercontent.com/23302973/139083422-a0b35bd0-f244-4fdf-8e38-eb08257164e8.png)

---

```javascript
//repl에서 푼 코드
let str1 = "564FRANCEdf56";
let str2 = "fr45efgn67  ch";

// (조건1) 대소문자 미구분: toLocaleLowerCase 사용해서 바꾼 후에 비교
console.log(str1.toLocaleLowerCase());
// (조건2) 영문인지 구분(정규식으로 표현)
let pattern_eng = /^[a-zA-Z]*$/; // 영문
let pattern_num = /[0-9]/; // 숫자
let pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
let pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글

if (
  (pattern_eng.test(str1) && pattern_num.test(str1)) ||
  (pattern_eng.test(str1) && pattern_spc.test(str1)) ||
  (pattern_eng.test(str1) && pattern_kor.test(str1))
) {
  console.log("영어만 써야함");
} else {
  console.log("영어만 있음");
}

/* 1)두 글자씩 끊어서 다중집합 만들기
 * 문자열 두개씩 분리 -> 대소문자 미구분 조건을 위해 toLocaleLowerCase()
 * 해당 문자가 영문만 있는지 체크해서 맞다면 새로운 배열에 넣고, 아니라면 continue
 */
let arr1 = [];
let arr2 = [];

for (let i = 0; i < str1.length - 1; i++) {
  let joinStr = str1.substr(i, 2);
  if (pattern_eng.test(joinStr)) {
    arr1.push(joinStr.toLocaleLowerCase());
  } else {
    continue;
  }
}
for (let i = 0; i < str2.length - 1; i++) {
  let joinStr = str2.substr(i, 2);
  if (pattern_eng.test(joinStr)) {
    arr2.push(joinStr.toLocaleLowerCase());
  } else {
    continue;
  }
}
console.log(arr1, arr2);

/* 2)두 집합 비교해서 교집합, 합집합 배열 생성 */
const intersection = arr1.filter((data) => arr2.includes(data));
console.log(intersection);
const union = [...new Set([...arr1, ...arr2])];
console.log(union);

/* 3)각 배열 크기 구해서 자카드 유사도 값 구하기 */
console.log(intersection.length);
console.log(union.length);
console.log(intersection.length / union.length);
/* 4)나온 값에 65536 곱해서 결과값 리턴 */
console.log((intersection.length / union.length) * 65536);
```

---

```javascript
//프로그래머스 적용 코드
function arrSet(arr) {
  let pattern_eng = /^[a-zA-Z]*$/;
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let joinStr = arr.substr(i, 2);
    if (pattern_eng.test(joinStr)) {
      result.push(joinStr.toLocaleLowerCase());
    } else {
      continue;
    }
  }
  return result;
}

function solution(str1, str2) {
  var answer = 0;
  let arr1 = arrSet(str1);
  let arr2 = arrSet(str2);

  const intersection = arr1.filter((data) => arr2.includes(data));
  const union = [...new Set([...arr1, ...arr2])];

  answer = parseInt((intersection.length / union.length) * 65536);

  return answer;
}
```

![image](https://user-images.githubusercontent.com/23302973/139582273-d3f1b7aa-08ab-481b-86fd-b33aaf847fa3.png)
첫 번째만 맞고 다 틀림 -> 다중집합에 대한 교집합, 합집합을 구해야하는데 그냥 구함

- 교집합에 포함되지 않는 건 무조건 합집합에 포함시키는 조건 필요

---

```javascript
//같은 식을 사용하기 때문에 함수로 따로 뺌
function arrSet(arr) {
  let pattern_eng = /^[a-zA-Z]*$/; // 영문인지 체크
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let joinStr = arr.substr(i, 2);
    if (pattern_eng.test(joinStr)) {
      result.push(joinStr.toLocaleLowerCase());
    } else {
      continue;
    }
  }
  return result;
}

function solution(str1, str2) {
  let arr1 = arrSet(str1);
  let arr2 = arrSet(str2);

  //교집합과 합집합을 구하는 과정(중복 포함)
  const intersection = [];
  const union = [];

  //겹치는 값이 있으면 교집합 배열에 넣고
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) >= 0) {
      intersection.push(arr1.splice(arr1.indexOf(arr2[i]), 1));
    }
    //겹치지 않는 건 합칩합 배열에 넣음(여기서 중복 포함 시킴)
    union.push(arr2[i]);
  }

  //중복 포함되지 않는 모든 값 합집합 배열에 넣기
  for (let i = 0; i < arr1.length; i++) {
    union.push(arr1[i]);
  }

  //모두 0일 경우 조건 체크 -> 이거 안 하면 통과가 안됨
  if (intersection.length === 0 && union.length === 0) {
    return 65536;
  }

  return parseInt((intersection.length / union.length) * 65536);
}
```
