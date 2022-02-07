```javascript
const operator = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
};

function solution(expression) {
  let expression = "100-200*300-500+20";
  let answer = 0;
  // 조합 설정
  const permutation = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "-", "+"],
    ["*", "+", "-"],
  ];
  // 숫자만
  const numArr = expression.split(/[^0-9]/).map((num) => +num);
  console.log("numArr", numArr);
  // 수식만
  const opArr = expression.match(/[\+\-\*]/g);
  console.log("opArr", opArr);

  for (const permu of permutation) {
    let copyNum = [...numArr];
    let copyOp = [...opArr];
    let opIdx = 0;

    while (true) {
      for (let i = 0; i < copyOp.length; i++) {
        console.log("copyOp[i]", copyOp[i]);
        console.log("permu[opIdx]", permu[opIdx]);
        // permutation 내 수식과 expression에서 추출한 수식이 같은지 하나씩 확인
        if (copyOp[i] === permu[opIdx]) {
          copyNum[i] = operator[copyOp[i]](copyNum[i], copyNum[i + 1]);
          // 계산이 끝났으면 제거
          copyNum.splice(i + 1, 1);
          copyOp.splice(i, 1);
          //
          i--;
        }
      }
      // 한 번 다 돌았으면, 그 다음 조합 계산을 위해 ++
      opIdx++;

      // 숫자가 하나만 남을 경우엔 break
      if (copyNum.length === 1) break;
    }

    // 절대값 리턴
    if (Math.abs(copyNum[0]) > answer) answer = Math.abs(copyNum[0]);
  }

  return answer;
}
```

---

완전 탐색 문제라고 함

풀이법이 안 떠올라서 다른 사람 거 참고 하고 주석 달아놓음

다시 풀어보기
