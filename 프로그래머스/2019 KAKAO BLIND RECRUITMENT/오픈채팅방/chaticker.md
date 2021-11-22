코드 짜기 전에

1. Enter, Leave, Change 각 상태와 관련되게 변경
2. change의 경우는 uid에 맞는 name을 변경 해줘야함
   -> map 사용해서 중복되는 uid의 name 변경
3. Enter, Leave의 경우는 변경 필요 없음

처음에 배열에 있는 문자열을 하나씩 빼서 비교하고 임시 배열에 넣어 uid랑 name을 비교하는 과정을 반복했는데, 너무 비효율적이라고 생각해서 찾아봤더니 map을 사용하는 걸 알게됨 -> 안 보고 다시 풀어보기

```javascript
//repl 코드
```
