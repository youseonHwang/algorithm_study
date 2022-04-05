```javascript
function solution(array, commands) {
  var answer = [];
  for (let i in commands) {
    let result = array.slice(commands[i][0] - 1, commands[i][1]);
    result.sort(function (a, b) {
      return a - b;
    });
    answer.push(result[commands[i][2] - 1]);
  }
  return answer;
}
```

그냥 array.sort()썼더니 효율성 테스트에서 막혀서 바꿈
