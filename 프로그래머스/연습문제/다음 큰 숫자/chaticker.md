```javascript
function solution(n) {
  let hexN = n.toString(2);
  let cnt = hexN.match(/1/g).length;

  while (true) {
    n += 1;
    let nextN = n.toString(2);
    let nextCnt = nextN.match(/1/g).length;
    if (cnt === nextCnt) {
      break;
    }
  }
  return n;
}
```

처음에 match 안 쓰고 배열로 바꿔서 filter 쓰려다가 너무 복잡한듯해서 바꿈
