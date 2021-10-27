코드 짜기 전에
![image](https://user-images.githubusercontent.com/23302973/139083422-a0b35bd0-f244-4fdf-8e38-eb08257164e8.png)

---

```javascript
//미해결
let str1 = "FRANCE";
let str2 = "french";

// (조건1) 대소문자 미구분: toLocaleLowerCase 사용해서 바꾼 후에 비교
console.log(str1.toLocaleLowerCase());
// (조건2) 영문인지 구분
let pattern_eng = /[a-zA-Z]/; // 영문
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
 * 문자열 하나씩 분리
 * 해당 문자가 영문인지 체크해서 맞다면 새로운 배열에 넣고, 아니라면 continue
 * 배열에 담긴 문자들을 기준으로 두글자씩 묶어서 새로운 배열 생성
 */
/* 2)두 집합 비교해서 교집합, 합집합 배열 생성 */
/* 3)각 배열 크기 구해서 자카드 유사도 값 구하기 */
/* 4)나온 값에 65536 곱해서 결과값 리턴 */
```
