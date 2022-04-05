```javascript
function solution(numbers) {
	var answer = numbers
		.map((c) => c + "")
		.sort((a, b) => b + a - (a + b))
		.join("");
	return answer[0] === "0" ? "0" : answer;
}
```

1. c + "" : 모든 숫자를 문자로 변경

2. .sort((a, b) => b + a - (a + b)) : 문자열 비교 및 정렬 (핵심)

    ( '3', '30' => ('303')-('330')) -> 큰 수의 조합 순으로 정렬

    뺐을 때, 양수가 나오면 순서 바뀜 / 음수이면 그대로

3. 모든 문자열 합치기

4. 0으로 시작하는 경우 "0" 리턴 / 아니면 asnwer 리턴
