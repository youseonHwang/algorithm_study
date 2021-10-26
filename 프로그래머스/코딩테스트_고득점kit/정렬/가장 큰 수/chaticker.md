코드 짜기 전에

- 순열 이용해서 가능한 숫자 조합 만들기(중복 제거 필수)
- 그 중 가장 큰 수 구하기 -> Math.max 사용
- join 사용해서 하나의 문자열로 만든 후에 결과 값 리턴

---

```javascript
//테스트 하면서 푸는 중(미해결)
const cases = [6, 10, 2];
const arr = [];
const arr2 = [];
const permute = (arr, cases, outArr) => {
  for (let i = 0; i < cases.length; i++) {
    let chr = cases.splice(i, 1)[0]; // i위치에서 1만큼 제거한 배열의 0번 요소
    arr.push(chr);
    console.log("??", arr);
    if (cases.length == 0) {
      outArr.push(arr.slice());
    }
    console.log("???", outArr); //여기까지 가능한 모든 조합을 반복해서 찾음

    permute(arr, cases, outArr);
    cases.splice(i, 0, chr); // i 위치에서 0만큼 제거(=아무것도 안함)한 뒤 chr을 i위치에 삽입
    arr.pop();
  }
  return arr2; //최종 만들어진 순열 값들
};

permute(arr, cases, arr2);
let result = arr2.map((num) => num.join(""));
//...붙였더니 갑자기 된다고!? 무슨 차이지 -> ... 없으면 인수 없이 max를 호출하는 것과 같다고 함 그래서 NaN 나왔었음
console.log(Math.max(...result));
```

![캡처](https://user-images.githubusercontent.com/23302973/138877737-41a2440c-acb3-455c-80e4-1bc8a7d0c7c4.PNG)
뭐 일단 답은 나오긴 함(repl.com에서 짜본 코드)

---

```javascript
//프로그래머스 적용 코드
function solution(numbers) {
  const arr = [];
  const arr2 = [];
  const permute = (arr, numbers, outArr) => {
    for (let i = 0; i < numbers.length; i++) {
      let chr = numbers.splice(i, 1)[0]; // i위치에서 1만큼 제거한 배열의 0번 요소
      arr.push(chr);
      //가능한 모든 조합을 반복해서 찾음
      if (numbers.length == 0) {
        outArr.push(arr.slice());
      }
      permute(arr, numbers, outArr);
      numbers.splice(i, 0, chr); // i 위치에서 0만큼 제거(=아무것도 안함)한 뒤 chr을 i위치에 삽입
      arr.pop();
    }
    return arr2; //최종 만들어진 순열 값들
  };

  permute(arr, numbers, arr2);
  let result = arr2.map((num) => num.join(""));
  return String(Math.max(...result));
}
```

![캡처](https://user-images.githubusercontent.com/23302973/138879430-d1d6c4ad-c403-442f-a85a-1e3f94d1c2df.PNG)

아 문자열 리턴,, -> String()으로 리턴 값 묶어주니 테스트 케이스는 통과

![캡처](https://user-images.githubusercontent.com/23302973/138880048-7028b7e8-5b78-4007-bf53-2b809be5f1b9.PNG)
왜,, 순열로 하면 안되나? -> numbers의 최대 길이가 제한되어 있기 때문에 안된다고 함

---

다른 사람 코드 참고

```javascript
function solution(numbers) {
  const result = numbers
    //각 숫자들을 문자로 변환한 후 연결하여 비교 정렬한 값(문자열을 그대로 연결한 수(b+a) - 바꿔 연결한 수(a+b))을 join을 사용해 묶어줌
    //예: ( '3', '30' => ('303')-('330'))
    .sort((a, b) => {
      return "" + b + a - ("" + a + b);
    })
    .join("");

  //배열이 0으로만 구성되어 있을 경우 '0'만 출력 아니라면 result 출력
  return result[0] === "0" ? "0" : result;
}
```
