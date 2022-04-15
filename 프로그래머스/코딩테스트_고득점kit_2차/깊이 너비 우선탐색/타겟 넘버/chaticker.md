![image](https://user-images.githubusercontent.com/23302973/163502996-25e57f66-bd4e-448b-aa04-8046119c282c.png)

```javascript
function solution(numbers, target) {
	let answer = 0;
	dfs(0, 0);
	// 깊이 우선 탐색 사용
	function dfs(level, res) {
		// leaf node 도착했을 때, 모든 numbers 탐색
		if (level < numbers.length) {
			// +일 경우 재귀 => 현재 level에 해당하는 값 더하기
			dfs(level + 1, res + numbers[level]);
			// -일 경우 재귀 => 현재 level에 해당하는 값 빼기
			dfs(level + 1, res - numbers[level]);
		} else {
			// 주어진 조건에 만족하면 answer++
			if (res === target) {
				answer += 1;
			}
		}
	}
	return answer;
}
```
