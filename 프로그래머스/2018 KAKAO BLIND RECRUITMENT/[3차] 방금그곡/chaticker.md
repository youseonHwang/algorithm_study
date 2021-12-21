코드 짜기 전에

1. 재생 시간의 길이와 음악의 음 길이 비교해서 최종 음 문자열 생성(해결)
2. 최종 음 문자열 내 m과 일치하는 문자열이 존재하는지 비교(해결)

    -> 문자열 m에 #이 있는 경우 제거하기(해결)

    -> 중복되어 일치하는 경우 음이 제일 길게 나온 음악 리턴(해결)

    -> 재생된 시간도 같을 경우 먼저 입력된 음악 제목을 리턴

3. 있다면 음악 제목 리턴 / 없다면 "(None)" 리턴(해결)

```javascript
//repl 코드
let m = "CC#BCC#BCC#BCC#B";
let musicinfos = ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"];

console.log(music(m, musicinfos));

function music(m, musicinfos) {
	const time = musicinfos.map((data) => {
		return data.split(",");
	});

	let compare = [];
	let replaceM = m.replaceAll("#", "");

	for (let i in time) {
		const [minutes, seconds] = time[i][1].split(":");
		const totalSeconds = +seconds; //재생시간 구하기
		let mName = time[i][2]; //제목
		let melody = time[i][3].replaceAll("#", ""); //#이 있으면 제거하고 진행
		if (melody.length > totalSeconds) {
			//크면 재생시간만큼 자르기
			let result = melody.substring(0, totalSeconds);
			compare.push([mName, result, result.length]);
		}
		if (melody.length < totalSeconds) {
			//작으면 재생시간만큼 반복해서 붙이기
			let result = melody.repeat(totalSeconds / melody.length);
			compare.push([mName, result, result.length]);
		}
		if (melody.length == totalSeconds) {
			//같으면 그대로 넣기
			compare.push([mName, melody, melody.length]);
		}
	}
	//compare에 있는 애들 중에 m과 일치하고, 제일 긴 거 리턴 / 없으면 none 리턴
	// console.log('compare?', compare);

	const result = compare.map((data) => {
		return data[1].includes(replaceM) ? data : "(None)";
	});
	// console.log('result?', result);

	//중복되어 일치하는 경우 음이 제일 길게 나온 음악 리턴
	//재생된 시간도 같을 경우 먼저 입력된 음악 제목을 리턴
	let maxLength = 0;
	let answer = [];
	for (let i in result) {
		if (result[i][2] > maxLength) {
			maxLength = result[i][2];
			answer = result[i];
		}
	}
	return answer[0];
}
```

```javascript
//프로그래머스 코드
function solution(m, musicinfos) {
	const time = musicinfos.map((data) => {
		return data.split(",");
	});

	let compare = [];
	let replaceM = m.replaceAll("#", "");

	for (let i in time) {
		const [minutes, seconds] = time[i][1].split(":");
		const totalSeconds = +seconds;
		let mName = time[i][2];
		let melody = time[i][3].replaceAll("#", "");
		if (melody.length > totalSeconds) {
			let result = melody.substring(0, totalSeconds);
			compare.push([mName, result, result.length]);
		}
		if (melody.length < totalSeconds) {
			let result = melody.repeat(totalSeconds / melody.length);
			compare.push([mName, result, result.length]);
		}
		if (melody.length == totalSeconds) {
			//같으면 그대로 넣기
			compare.push([mName, melody, melody.length]);
		}
	}
	const result = compare.map((data) => {
		return data[1].includes(replaceM) ? data : "(None)";
	});
	let maxLength = 0;
	let answer = [];
	for (let i in result) {
		if (result[i][2] > maxLength) {
			maxLength = result[i][2];
			answer = result[i];
		}
	}
	return answer[0];
}
```

TypeError [Error]: m.replaceAll is not a function 가 자꾸 떠서 찾아보니 내장된 replaceAll은 없고, replace(/#/gi, ""); 로 쓰면 같은 결과가 나온다고 해서 바꿈

---

![image](https://user-images.githubusercontent.com/23302973/146873441-3a391a65-751f-4062-a74c-916a05dc06dc.png)

#을 제거하고 난 이후를 생각못함 -> 애초에 replace할 때, #이 붙은 애들을 제거하는 게 아니라, 다른 문자 자체로 치환하기

---

```javascript
//프로그래머스 2차 코드
function solution(m, musicinfos) {
	const time = musicinfos.map((data) => {
		return data.split(",");
	});

	let compare = [];
	let replaceM = m
		.replace(/(C#)/g, "c")
		.replace(/(D#)/g, "d")
		.replace(/(F#)/g, "f")
		.replace(/(G#)/g, "g")
		.replace(/(A#)/g, "a");

	for (let i in time) {
		const [minutes, seconds] = time[i][1].split(":");
		const totalSeconds = +seconds;
		let mName = time[i][2];
		let melody = time[i][3]
			.replace(/(C#)/g, "c")
			.replace(/(D#)/g, "d")
			.replace(/(F#)/g, "f")
			.replace(/(G#)/g, "g")
			.replace(/(A#)/g, "a");
		if (melody.length > totalSeconds) {
			let result = melody.substring(0, totalSeconds);
			compare.push([mName, result, result.length]);
		}
		if (melody.length < totalSeconds) {
			let result = melody.repeat(totalSeconds / melody.length);
			compare.push([mName, result, result.length]);
		}
		if (melody.length == totalSeconds) {
			compare.push([mName, melody, melody.length]);
		}
	}
	let answer = [];
	let maxLength = 0;
	for (let i in compare) {
		if (compare[i][1].includes(replaceM) && compare[i][2] > maxLength) {
			maxLength = compare[i][2];
			answer.push(compare[i][0]);
		}
	}
	return answer.length != 0 ? answer[0] : "(None)";
}
```

![image](https://user-images.githubusercontent.com/23302973/146879792-3c4fb483-5d3a-4b42-b027-aec0b6024802.png)

뭐가 문제일까,,

1.  재생된 시간도 같을 경우 먼저 입력된 음악 제목을 리턴 -> 입력된 시간이 빠른 걸 찾아야함

2.

---

우선 비슷한 코드 가지고 다시 풀어보기 👇

```javascript
//이노래가 답의 후보가 될 수 있는지 찾는 함수
const isThisSong = (timeDiff, lyrics, findString) => {
	const newM = findString
		.replace(/(C#)/g, "c")
		.replace(/(D#)/g, "d")
		.replace(/(F#)/g, "f")
		.replace(/(G#)/g, "g")
		.replace(/(A#)/g, "a");

	const newMusicInfos = lyrics
		.replace(/(C#)/g, "c")
		.replace(/(D#)/g, "d")
		.replace(/(F#)/g, "f")
		.replace(/(G#)/g, "g")
		.replace(/(A#)/g, "a");

	let str = "";
	const repeatCount = parseInt(timeDiff / newMusicInfos.length);
	if (repeatCount === 0) {
		str = newMusicInfos.substring(0, timeDiff);
	} else {
		str =
			newMusicInfos.repeat(repeatCount) +
			newMusicInfos.substring(
				0,
				timeDiff - newMusicInfos.length * repeatCount
			);
	}
	//console.log(str);
	if (str.indexOf(newM) !== -1) {
		return 1;
	}
	return 0;
};

//시간을 계산하는 함수
const calculateTime = (st_time, ed_time) => {
	return (
		(parseInt(ed_time.substring(0, 2)) -
			parseInt(st_time.substring(0, 2))) *
			60 +
		parseInt(ed_time.substring(3)) -
		parseInt(st_time.substring(3))
	);
};

const solution = (m, musicinfos) => {
	//답이 될 수 있는 후보를 고른다.
	let songCandidates = [];
	for (let i = 0; i < musicinfos.length; i++) {
		const arr = musicinfos[i].split(",");
		const [st_time, ed_time, title, lyrics] = arr;
		const timeDiff = calculateTime(st_time, ed_time);
		if (isThisSong(timeDiff, lyrics, m)) {
			songCandidates.push([title, timeDiff]);
		}
	}

	//답을 구한다. 0일경우 none 출력, 1일경우 배열에있는 제목 출력, 나머지는 가장 시간이 긴 제목 출력
	if (songCandidates.length === 0) {
		return "(None)";
	} else if (songCandidates.length === 1) {
		return songCandidates[0][0];
	} else {
		let maxTime = 0;
		let answer = "";
		for (let i = 0; i < songCandidates.length; i++) {
			if (maxTime < songCandidates[i][1]) {
				maxTime = songCandidates[i][1];
				answer = songCandidates[i][0];
			}
		}
		return answer;
	}
};
```

```javascript
//프로그래머스 3차 코드
```
