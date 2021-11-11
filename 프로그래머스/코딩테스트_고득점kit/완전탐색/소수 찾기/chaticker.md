코드 짜기 전에

- 문자열 한 글자씩 잘라서 숫자로 바꾼 후 배열에 넣기
- 조합할 수 있는 모든 숫자를 만든 후, 소수인지 판단

  - 소수: 1과 자기 자신만으로 나누어 떨어지는 1보다 큰 양의 정수
  - 1은 소수가 아님

- 소수인 경우 결과 배열에 넣고 개수 카운트 해서 리턴

```javascript
//repl 코드(미해결)
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

      answer.push(newFixed);

      getPermutation(copyArr, newFixed);
    }
  }
};
getPermutation(res, "");

//소수인 경우 결과 배열에 넣고 개수 카운트 해서 리턴
for (let i = 0; i < answer.length; i++) {
  // if ()
}
```

```javascript
//프로그래머스 코드
```
