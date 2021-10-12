#### 더 맵게 → javascript 없어서 [완전탐색] - 모의고사로 대체

![KakaoTalk_20211012_161304950](https://user-images.githubusercontent.com/23302973/136910851-a12cd214-7f06-42b2-a7be-0d6ba01c4141.jpg)

```javascript
function solution(answers) {
  let s1 = [1, 2, 3, 4, 5];
  let s2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let cnt = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (s1[i % s1.length] === answers[i]) {
      cnt[0]++;
    }
    if (s2[i % s2.length] === answers[i]) {
      cnt[1]++;
    }
    if (s3[i % s3.length] === answers[i]) {
      cnt[2]++;
    }
  }
  let max = Math.max(...cnt);
  let answer = [];
  for (let i = 0; i < cnt.length; i++) {
    if (cnt[i] === max) {
      answer.push(i + 1);
    }
  }
  return answer;
}
```
