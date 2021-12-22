```javascript
function solution(n) {
	let answer = 0; //총 몇갠지

	for (let i = 1; i < n + 1; i++) {
		let sum = 0;
		for (let j = i; j < n + 1; j++) {
			sum += j;
			if (sum > n) {
				break;
			}
			if (sum < n) {
				continue;
			}
			if (sum === n) {
				answer++;
				break;
			}
		}
	}
	return answer;
}
```

오 통과
