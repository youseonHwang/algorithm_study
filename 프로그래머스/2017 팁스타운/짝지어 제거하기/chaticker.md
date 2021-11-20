코드 짜기 전에

- 앞뒤 문자 비교해서 같은 값이면 짝지어서 제거
- 위의 과정 반복

```javascript
//repl 코드
let s = "baabaa";
let arr = s.split("");

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[i + 1]) {
    arr.splice(i, 2);
    console.log(arr);
    i = -1;
  }
}
```

```javascript
//프로그래머스 코드
function solution(s) {
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2);
      i = -1;
    }
  }

  return arr.length === 0 ? 1 : 0;
}
```

![image](https://user-images.githubusercontent.com/23302973/142718553-936b38c3-66df-4bd2-99a3-9f1f453ef2a2.png)
효율성 테스트에서 막힘 왜지

찾아봤더니 stack을 사용해서 풀면 된다고 함

---

```javascript
//찾아보고 함
function solution(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
    if (arr[arr.length - 1] === arr[arr.length - 2]) {
      arr.pop();
      arr.pop();
    }
  }
  return arr.join("") === "" ? 1 : 0;
}
```

이해가 안 가서 콘솔 찍으면서 왜 이렇게 쓰는지 봤는데,

1. 나눈 문자열을 뒤에서부터 순서대로 넣음 (push)
2. 계속 반복하면서 가장 뒤에 있는 문자와 그 앞에 있는 문자를 비교함
3. 두 문자가 같다면 두 문자를 모두 빼줌(pop 두 번)
