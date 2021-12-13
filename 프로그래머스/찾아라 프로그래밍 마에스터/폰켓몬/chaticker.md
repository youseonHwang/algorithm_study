```javascript
function solution(nums) {
  const set1 = new Set(nums);
  let len = nums.length / 2;
  let answer;

  if (len < set1.size) {
    answer = len;
  } else {
    answer = set1.size;
  }
  return answer;
}
```

처음에 조건을 같은 값으로 했다가 하나씩 다르게 나와서 작을 때 조건으로 고쳤더니 통과 됨
