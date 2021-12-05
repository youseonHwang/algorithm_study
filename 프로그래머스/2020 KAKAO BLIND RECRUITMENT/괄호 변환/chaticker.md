주어진 조건 그대로 코드 짜면 됨

1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.
3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
   3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.

   4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다.

   4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.

   4-3. ')'를 다시 붙입니다.

   4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.

   4-5. 생성된 문자열을 반환합니다.

```javascript
//repl & 프로그래머스(solution) 코드
let p = "()))((()";

let result = solution(p);

console.log(result);

function solution(p) {
  //1단계
  if (p === "") return p;
  let u,
    v = "";
  let cnt = 0; //'(', ')' 개수 카운트용

  //2단계
  for (let i = 0; i < p.length; i++) {
    p[i] === "(" ? cnt++ : cnt--;
    if (cnt === 0) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1, p.length);
      break;
    }
  }

  //3단계: v에 대해 재귀 수행
  for (let j = 0; j < u.length; j++) {
    u[j] === "(" ? cnt++ : cnt--;
    //4단계
    if (cnt != 0) {
      let tmp = "";
      tmp += "(" + solution(v) + ")";
      //첫 번째와 마지막 문자 제거
      for (let k = 1; k < u.length - 1; k++) {
        u[k] === "(" ? tmp + ")" : tmp + "(";
      }
      return tmp;
    }
  }
  return u + solution(v);
}
```

![image](https://user-images.githubusercontent.com/23302973/144747511-17791cbf-96c9-4b26-bf5f-1861b9e9d9cf.png)

tmp에 괄호 추가 하는 부분이랑 조건(무조건 0보다 작은 경우가 맞음)이 맞지 않아서 생긴 에러

---

```javascript
function solution(p) {
  //1단계
  if (p === "") return p;
  let u,
    v = "";
  let cnt = 0; //'(', ')' 개수 카운트용

  //2단계
  for (let i = 0; i < p.length; i++) {
    p[i] === "(" ? cnt++ : cnt--;
    if (cnt === 0) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1, p.length);
      break;
    }
  }

  //3단계: v에 대해 재귀 수행
  for (let j = 0; j < u.length; j++) {
    u[j] === "(" ? cnt++ : cnt--;
    //4단계
    if (cnt < 0) {
      //올바른 문자열 아닌 경우
      let tmp = "";
      tmp += "(" + solution(v) + ")";
      console.log(tmp);
      //첫 번째와 마지막 문자 제거
      for (let k = 1; k < u.length - 1; k++) {
        u[k] === "(" ? (tmp += ")") : (tmp += "(");
      }
      return tmp;
    }
  }
  return u + solution(v);
}
```
