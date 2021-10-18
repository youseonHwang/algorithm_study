participant랑 completion을 비교해서 completion에 없는 사람을 리턴하면 됨

1. 두 배열 모두 sort() 사용해서 정렬
2. 반복문 사용해서 두 배열 앞에서부터 비교
3. 항목이 일치하면 넘기고, 아니면 해당 항목 리턴

```javascript
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] === completion[i]) {
      continue;
    } else {
      return participant[i];
    }
  }
}
```
