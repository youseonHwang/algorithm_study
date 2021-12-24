코드 짜기 전에

1. A ~ M -> 0 ~ 12 (위로 이동) / Z ~ N -> 0 ~ 12 (아래로 이동) 지정함
   -> 알파벳 숫자 변환하는 함수 만들기
2. 들어온 문자열 하나씩 나눠서 위에 설정한 값만큼 더해나가기
3. 칸 이동 규칙 문제,,
   -> A 위치에 따라 커서 위치 좌/우 정하기
    1. A가 앞에만 있는 경우(ex. AAB) : A를 뺀 문자열 길이만큼 이동 횟수 +
    2. A가 중간에만 있는 경우(ex. CAAB) :
    3. A가 뒤에만 있는 경우(ex. AABC) : A를 뺀 문자열 길이 -1 만큼 이동 횟수 +
    4. A가 섞인 경우(ex. ACAB) : 전체 문자열 길이 -1 만큼 이동 횟수 +

```javascript
//repl코드
let str = "BANANA";

console.log("결과: ", solution(str));

function solution(name) {
	let alpha = name.split("");
	console.log("alpha: ", alpha);

	const change = alpha.reduce((a, b) => {
		const num = b.charCodeAt() - 65;
		return (a += num > 13 ? 26 - num : num);
	}, 0);

	console.log("알파벳 더한 값: ", change);

	let move = alpha.length;
	let N = alpha.length;

	console.log(move, N);

	for (let times = 0; times < 2; times++) {
		if (times === 1) {
			console.log("두번째 시작");
		}
		for (let i = 0; i < N; i++) {
			let j = i + 1;
			console.log(
				"======================================================"
			);
			console.log("i: ", i);
			console.log("j: ", j);
			console.log("alpha[j]: ", alpha[j]);
			while (j != i && alpha[j] == "A") j = (j + 1) % N;
			console.log("newj: ", j);
			move = Math.min(move, i + ((N + i - j) % N));
			console.log("move: ", move);
		}
		console.log("======================================================");
		const tmp = alpha[0];
		alpha = alpha.slice(1).reverse();
		alpha.unshift(tmp);
	}

	return change + move;
}
```

```javascript
//그나마 이해한 코드
let str = "BANANA";

console.log("결과: ", solution(str));

function solution(name) {
  var answer = 0;
  let alpha = name.split("");

  const change = alpha.reduce((a, b) => {
    const num = b.charCodeAt() - 65;
    return (a += num > 13 ? 26 - num : num);
  }, 0);

  console.log("알파벳 더한 값: ", change);

  let noA = [];
  for (let i = 0; i < name.length; i++) {
    if (name[i] === "A") continue;
    noA.push(i); // A가 아닌 인덱스 넣기
  }

  console.log("noA: ", noA);

  let i = 0; // 좌, 우 커서
  const len = name.length;
  while (noA.length > 0) {{
    // 정방향: noA[0]쪽으로 가기 위함
    const rightDist = i > noA[0] ? noA[0] + len - i : noA[0] - i;
    // 역방향: [noA.length - 1]쪽으로 가기 위함
    const leftDist =
      i > noA[noA.length - 1]
        ? i - noA[noA.length - 1]
        : i + len - noA[noA.length - 1];

    if (leftDist < rightDist) {
      // 왼쪽이 더 가깝다(가장 마지막 값 넣기 -> 돌아서 뒤부터 순회하기 때문)
      i = noA[noA.length - 1];
      noA.pop(); // 뒤에 값 빼기
      answer += leftDist;
    } else {
      // 오른쪽이 더 가깝다(가장 처음 값 넣기)
      i = noA[0];
      noA.shift(); // 앞에 갚 빼기
      answer += rightDist;
    }
  }
  answer += change; // 알파벳 더한 값 추가

  return answer;
}
```

나중에 다시 풀어보기
