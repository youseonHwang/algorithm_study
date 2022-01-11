### LRU 알고리즘

페이지 교체 알고리즘으로, 페이지 부재가 발생했을 경우 가장 오랫동안 사용되지 않은 페이지를 제거하는 알고리즘

-   cities 안에 맨 앞에 값을 빼서 새로운 배열 안에 있는지 체크

    cache hit: 새로운 배열에서 해당 값을 지우고, push / answer+=5

    cache miss: 새로운 배열에서 맨 앞 값을 지우고, push / answer+=1

```javascript
function solution(cacheSize, cities) {
	let answer = 0;
	let match = [];

	while (cities.length != 0) {
		let tmp = cities.shift();
		if (match.includes(tmp)) {
			match.splice(match.indexOf(tmp), 1);
			match.push(tmp);
			answer += 5;
		} else {
			match.shift();
			match.push(tmp);
			answer += 1;
		}
	}
	console.log(match);
	return answer;
}
```

---

![image](https://user-images.githubusercontent.com/23302973/148894146-6d2308aa-30f4-4328-962e-942a5c45b374.png)

뭐가 문제인지 모르겠어서 봤더니 캐시 크기가 0인 경우의 미처리 + cache miss일 경우 사이즈가 같은지 조건 처리 안 해줌 + 대소문자 구분 조건 추가 안 함 + answer += 값 반대로 넣고 있음

---

```javascript
function solution(cacheSize, cities) {
	let answer = 0;
	let match = [];

	if (cacheSize === 0) return cities.length * 5;

	while (cities.length != 0) {
		let tmp = cities.shift().toLowerCase();
		if (match.includes(tmp)) {
			match.splice(match.indexOf(tmp), 1);
			match.push(tmp);
			answer += 1;
		} else {
			if (match.length === cacheSize) {
				match.shift();
			}
			match.push(tmp);
			answer += 5;
		}
	}
	return answer;
}
```
