1. 옷 종류별 개수 세서 객체로 만들기
2. 해당 옷 종류를 안 입는 경우를 생각해서 미리 +1씩 해두기
3. 각 종류별 옷 개수 곱하기
4. 아예 안 입는 경우는 없다고 했으니 결과값에서 -1 하기

---

```javascript
// repl 코드
const clothes = [
	["yellowhat", "headgear"],
	["bluesunglasses", "eyewear"],
	["green_turban", "headgear"],
];

let obj = {};

// in - 인덱스 반환 / of - 값 반환
for (let cloth of clothes) {
	if (obj[cloth[1]]) {
		obj[cloth[1]] += 1;
	} else {
		obj[cloth[1]] = 1;
	}
}
console.log(obj); // { headgear: 2, eyewear: 1 }

result = 1;
for (let value in obj) {
	obj[value] += 1;
	result *= obj[value];
}
```

---

```javascript
// 프로그래머스 코드
function solution(clothes) {
	let obj = {};
	for (let cloth of clothes) {
		if (obj[cloth[1]]) {
			obj[cloth[1]] += 1;
		} else {
			obj[cloth[1]] = 1;
		}
	}
	result = 1;
	for (let value in obj) {
		obj[value] += 1;
		result *= obj[value];
	}
	return result - 1;
}
```

---

이전 코드 -> 뭐가 더 효율적인지는 잘 모르겠지만 확실히 위의 코드가 가독성 + 코드 길이 측면에서는 더 나은 듯,,

```javascript
function solution(clothes) {
	const category = [];
	const cnt = [];

	clothes.forEach((cloth) => {
		//만약 key가 존재하지 않으면 즉, 새로운 종류의 옷이면 1로 초기화
		if (category.indexOf(cloth[1]) === -1) {
			const idx = category.length;
			category.push(cloth[1]);
			cnt[idx] = 1;
			//key가 존재하는 경우에는 +1
		} else {
			const idx = category.indexOf(cloth[1]);
			cnt[idx] += 1;
		}
	});

	let result = cnt.reduce((acc, curr) => acc * (curr + 1), 1) - 1;
	return result;
}
```
