코드 짜기 전에

1. skill_trees 순회 하면서 skill과 일치하는 문자 찾기
2. skill과 순서가 일치하지 않으면 skill_trees에서 제거
3. 제거 한 후 남은 문자열 리턴

```javascript
//repl 코드
let skill = "CBD";
let skill_trees = ["BACDE", "CBADF", "AECB", "BDA", "CNBD"];

skillCheck(skill, skill_trees);

function skillCheck(skill, skill_trees) {
	const divide_skill = skill.split(""); //skill 나누기
	//skill_trees 나누고, 순회 하면서 CBD 값 있는지 찾기
	const filter_skill = skill_trees.map((data) => {
		let div_skill = data.split("");
		return div_skill.filter((el) => skill.includes(el));
	});
	console.log("filter_skill: ", filter_skill);
	let answer = filter_skill.length;
	for (let i in filter_skill) {
		for (let j in filter_skill[i]) {
			//skill과 순서가 일치하지 않으면 skill_trees에서 제거
			if (filter_skill[i][j] != divide_skill[j]) {
				answer--;
				filter_skill.pop();
			}
		}
	}
	console.log(answer);
	return answer;
}
```

```javascript
//프로그래머스 코드
function solution(skill, skill_trees) {
	const divide_skill = skill.split("");
	const filter_skill = skill_trees.map((data) => {
		let div_skill = data.split("");
		return div_skill.filter((el) => skill.includes(el));
	});
	let answer = filter_skill.length;
	for (let i in filter_skill) {
		for (let j in filter_skill[i]) {
			if (filter_skill[i][j] != divide_skill[j]) {
				filter_skill.pop();
				answer--;
			}
		}
	}
	return answer;
}
```

![image](https://user-images.githubusercontent.com/23302973/146504199-bc396273-578a-4b2c-9d09-ca1a9745ebf0.png)

if 문에서의 문제:

1. 반복문 안에 있기 때문에 if 조건을 탔을 때 break 걸어줘야함
2. 생각 해보니까 answer 자체 길이를 줄이는데 filter_skill.pop();을 하는 의미가 없음

---

```javascript
//프로그래머스 2차 코드
function solution(skill, skill_trees) {
	const divide_skill = skill.split("");
	const filter_skill = skill_trees.map((data) => {
		let div_skill = data.split("");
		return div_skill.filter((el) => skill.includes(el));
	});
	let answer = filter_skill.length;
	for (let i in filter_skill) {
		for (let j in filter_skill[i]) {
			if (filter_skill[i][j] != divide_skill[j]) {
				answer--;
				break;
			}
		}
	}
	return answer;
}
```
