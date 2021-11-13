코드 짜기 전에

- 문자열 한 글자씩 잘라서 숫자로 바꾼 후 배열에 넣기
- 조합할 수 있는 모든 숫자를 만든 후, 소수인지 판단

  - 소수: 1과 자기 자신만으로 나누어 떨어지는 1보다 큰 양의 정수
  - 1은 소수가 아님

- 소수인 경우 결과 배열에 넣고 개수 카운트 해서 리턴

```javascript
//repl 코드
let numbers = "17";
let answer = [];
//문자열 한 글자씩 잘라서 배열로 만들기
let res = numbers.split("");

//조합할 수 있는 모든 숫자를 만들기 (재귀 사용)
const getPermutation = (res, fixed) => {
  if (res.length >= 1) {
    for (let i = 0; i < res.length; i++) {
      const newFixed = fixed + res[i];
      const copyArr = res.slice();
      console.log(newFixed, copyArr);
      copyArr.splice(i, 1);

      //newFixed가 소수인지 아닌지 판단해서 answer 배열에 넣기
      if (isPrime(newFixed)) {
        answer.push(newFixed);
      }
      getPermutation(copyArr, newFixed);
    }
  }
};
getPermutation(res, "");

console.log(answer);

//소수인 경우 결과 배열에 넣고 개수 카운트 해서 리턴
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
    if (num % i === 0) {
      return false;
    }
  }
  // 소수는 1보다 큰 정수이므로 1보다 작으면 false 리턴
  return num > 1;
}
```

```javascript
//프로그래머스 1차 코드
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function solution(numbers) {
  let answer = [];
  let res = numbers.split("");

  const getPermutation = (res, fixed) => {
    if (res.length >= 1) {
      for (let i = 0; i < res.length; i++) {
        const newFixed = fixed + res[i];
        const copyArr = res.slice();
        console.log(newFixed, copyArr);
        copyArr.splice(i, 1);
        if (isPrime(newFixed)) {
          answer.push(newFixed);
        }
        getPermutation(copyArr, newFixed);
      }
    }
  };
  getPermutation(res, "");

  return answer.length;
}
```

![image](https://user-images.githubusercontent.com/23302973/141486872-80177145-0b0e-4e47-b0f6-0412183ee2ad.png)
answer.push(newFixed); 에서 중복되는 값을 체크 안 하고 그냥 넣어서 생긴 문제

```javascript
//프로그래머스 2차 코드
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function solution(numbers) {
  let answer = [];
  let res = numbers.split("");

  const getPermutation = (res, fixed) => {
    if (res.length >= 1) {
      for (let i = 0; i < res.length; i++) {
        const newFixed = fixed + res[i];
        const copyArr = res.slice();
        console.log(newFixed, copyArr);
        copyArr.splice(i, 1);
        if (isPrime(parseInt(newFixed)) && answer.indexOf(newFixed) === -1) {
          answer.push(newFixed);
        }
        getPermutation(copyArr, newFixed);
      }
    }
  };
  getPermutation(res, "");

  return answer.length;
}
```

왜 자꾸 011이 포함되는지 의문,,, 타입 문제인듯한데 다시 확인해보기

```javascript
//프로그래머스 3차 코드
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function solution(numbers) {
  let answer = [];
  let res = numbers.split("");

  const getPermutation = (res, fixed) => {
    if (res.length >= 1) {
      for (let i = 0; i < res.length; i++) {
        const newFixed = fixed + res[i];
        const copyArr = res.slice();
        copyArr.splice(i, 1);
        if (
          isPrime(parseInt(newFixed)) &&
          answer.indexOf(parseInt(newFixed)) === -1
        ) {
          answer.push(parseInt(newFixed));
        }
        getPermutation(copyArr, newFixed);
      }
    }
  };

  getPermutation(res, "");

  return answer.length;
}
```

통과
