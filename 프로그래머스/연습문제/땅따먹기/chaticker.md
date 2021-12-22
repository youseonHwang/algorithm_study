코드 짜기 전에

1. 첫 번째 행에서 가장 큰 값 찾기
2. 그 다음 행부터 이전 행의 최댓값을 누적하기
3. 마지막 행에서 누적된 값들 중 최대값 리턴

```javascript
//repl 코드
let land = [
	[1, 2, 3, 5],
	[5, 6, 7, 8],
	[4, 3, 2, 1],
];
let answer = [];

for (let i = 1; i < land.length; i++) {
	land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
	land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
	land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
	land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
}

console.log(Math.max(...land[land.length - 1])); //16
```

```javascript
//프로그래머스 코드
function solution(land) {
	for (let i = 1; i < land.length; i++) {
		land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
		land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
		land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
		land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
	}
	return Math.max(...land[land.length - 1]);
}
```

이해가 안 가서 다른 사람 풀이 참고했음

```javascript
//반복문 돌리는 버전
function solution(land) {
	const N = land.length;

	for (let i = 1; i < N; i++) {
		for (let j = 0; j < 4; j++) {
			let max = Number.MIN_SAFE_INTEGER;
			for (let k = 0; k < 4; k++) {
				if (j === k) continue;
				max = Math.max(max, land[i - 1][k]);
			}
			land[i][j] += max;
		}
	}
	return Math.max(...land[N - 1]);
}
```
