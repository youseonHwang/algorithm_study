```javascript
//프로그래머스 코드
function solution(s) {
	let subStr = s.split(" ");
	let eng = /[a-zA-Z]/;

	for (let i in subStr) {
		if (eng.test(subStr[i][0])) {
			subStr[i] = subStr[i][0].toUpperCase() + subStr[i].substr(1);
		} else {
			subStr[i] = subStr[i];
		}
	}
	return subStr.join(" ");
}
```

![image](https://user-images.githubusercontent.com/23302973/147426392-27321bd3-f8d8-49d2-a20e-c0043cb2590a.png)

똑같은데 왜지 -> .toLowerCase() 빼먹음

---

```javascript
//프로그래머스 2차 코드
function solution(s) {
	let subStr = s.split(" ");
	let eng = /[a-zA-Z]/;

	for (let i in subStr) {
		if (eng.test(subStr[i][0])) {
			subStr[i] =
				subStr[i][0].toUpperCase() + subStr[i].substr(1).toLowerCase();
		} else {
			subStr[i] = subStr[i];
		}
	}
	return subStr.join(" ");
}
```

![image](https://user-images.githubusercontent.com/23302973/147426625-cf4cc787-9576-4dcd-bb66-09fe863776b3.png)

왜 -> 공백 여러개일 수도 있음 + 첫 문자가 공백인 경우에도 대문자로 변환해야 함

위에서 subStr[i] 자체를 바꾸고 있는데, 원본을 보존하면서 결과 값 나오도록 해야 함

---

```javascript
//프로그래머스 3차 코드
function solution(s) {
	let subStr = s.split(" ");
	let answer = [];

	for (let i in subStr) {
		answer.push(
			subStr[i].substr(0, 1).toUpperCase() +
				subStr[i].substr(1).toLowerCase()
		);
	}
	return answer.join(" ");
}
```
