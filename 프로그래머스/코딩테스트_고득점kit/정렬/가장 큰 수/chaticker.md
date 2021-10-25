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

console.log(permute(arr, cases, arr2));
console.log(arr2.map((num) => Math.max(parseInt(num.join("")))));
```
