1.  문자열을 n개 이상 단위로 반복해서 자르는 게 기본
2.  기존 문자열의 끝까지 n개씩 끊으면서 새로운 배열에 넣기 반복
3.  끊은 문자열 중 만약 같은 문자열이 있다면 해당 문자열을 합침
4.  위 3번까지의 과정을 전체 반복하면서 새로운 배열에 담고, 그 중 가장 짧은 길이의 문자열 리턴

---

```javascript
//문자열을 n개 이상 단위로 반복해서 자르기
let s = "abcabcdede";

// 예) 3개씩 자를경우
let result = [];
let answer = [];
for (let i = 1; i < s.length + 1; i++) {
	result = chunkString(s, i);
	answer.push(result);
}
console.log(answer);
let min = answer[0];
for (var word of answer) {
	if (word.length < min.length) {
		min = word.length;
	}
}
console.log(min);

function chunkString(str, length) {
	// 정규식으로 length의 길이만큼 잘라서 배열로 return
	let sub = str.match(new RegExp(".{1," + length + "}", "g"));
	let result = [];
	let answer = [];
	for (let i in sub) {
		// console.log(sub[i]);
		//매칭되는 값의 개수 구하기
		result = sub.reduce(function (a, b) {
			//객체에 없으면 해당 값 그대로 리턴
			if (!a.hasOwnProperty(b)) {
				a[b] = 1;
			} else {
				a[b] = a[b] + 1; // 기존 값에 + 1
			}
			return a;
		}, {});
	}
	// console.log(result);
	for (const [key, value] of Object.entries(result)) {
		// console.log(`${value}`);
		if (`${value}` === `1`) {
			answer.push(`${key}`);
		} else {
			answer.push(`${value}${key}`);
		}
	}
	return answer.join("");
}
```

---

```javascript
//프로그래머스 적용 코드
function solution(s) {
	let result = [];
	let answer = [];
	for (let i = 1; i < s.length + 1; i++) {
		result = chunkString(s, i);
		answer.push(result);
	}
	console.log(answer);
	let min = answer[0].length;
	for (var word of answer) {
		if (word.length < min) {
			min = word.length;
		}
	}
	console.log(min);
	return min;

	function chunkString(str, length) {
		// 정규식으로 length의 길이만큼 잘라서 배열로 return
		let sub = str.match(new RegExp(".{1," + length + "}", "g"));
		let result = [];
		let answer = [];
		for (let i in sub) {
			// console.log(sub[i]);
			//매칭되는 값의 개수 구하기
			result = sub.reduce(function (a, b) {
				//객체에 없으면 해당 값 그대로 리턴
				if (!a.hasOwnProperty(b)) {
					a[b] = 1;
				} else {
					a[b] = a[b] + 1; // 기존 값에 + 1
				}
				return a;
			}, {});
		}
		// console.log(result);
		for (const [key, value] of Object.entries(result)) {
			// console.log(`${value}`);
			if (`${value}` === `1`) {
				answer.push(`${key}`);
			} else {
				answer.push(`${value}${key}`);
			}
		}
		return answer.join("");
	}
}
```

![화면 캡처 2021-11-04 134430](https://user-images.githubusercontent.com/23302973/140259354-6517a296-a68b-4d53-8dc3-8e6df84726ab.png)

뭐가 틀렸는지 몰랐는데,,,알고보니 문제를 잘못 이해함

-   전체 중복개수가 아니고 이어진 문자 중에서의 중복 체크를 해야함

---

```javascript

```
