코드 짜기 전에

1. 재생 시간의 길이와 음악의 음 길이 비교해서 최종 음 문자열 생성
2. 최종 음 문자열 내 m과 일치하는 문자열이 존재하는지 비교

    -> 문자열 m에 #이 있는 경우 제거하기
    -> 중복되어 일치하는 경우 음이 제일 길게 나온 음악 리턴

3. 있다면 음악 제목 리턴 / 없다면 "(None)" 리턴

```javascript
//repl 코드(미해결)
let m = "ABCDEFG";
let musicinfos = ["12:00,12:14,HELLO,CDE#FG#AB#", "13:00,13:05,WORLD,ABCDEF"];

const time = musicinfos.map((data) => {
	return data.split(",");
});

console.log(time);

for (let i in time) {
	const [minutes, seconds] = time[i][1].split(":");
	const totalSeconds = +seconds; //재생시간 구하기
	// console.log(totalSeconds);
	let mName = time[i][2]; //제목
	let melody = time[i][3].replaceAll("#", ""); //#이 있으면 제거하고 진행
	let compare = [];
	if (melody.length > totalSeconds) {
		//크면 재생시간만큼 자르기
	}
	if (melody.length < totalSeconds) {
		//작으면 재생시간만큼 반복해서 붙이기
	}
	if (melody.length == totalSeconds) {
		//같으면 그대로 넣기
		compare.push([mName, melody]);
	}
	//compare에 있는 애들 중에 m과 일치하고, 제일 긴 거 리턴 / 없으면 none 리턴
}
```

```javascript
//프로그래머스 코드
```
