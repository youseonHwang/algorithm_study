1. 일반적인 방법으로 접근 시
    ```javascript
    function solution(participant, completion) {
    	var answer = "";
    	/*두 배열 정렬*/
    	participant.sort();
    	completion.sort();
    	/*두 배열 비교*/
    	for (let i in participant) {
    		if (participant[i] != completion[i]) {
    			return participant[i];
    		}
    	}
    	return answer;
    }
    ```

---

2. 해시를 사용한 접근 시

    ```javascript
    const obj = {};
    let participant = ["leo", "kiki", "eden"];
    let completion = ["eden", "kiki"];

    /*key: value 값 매칭*/
    for (let p of participant) {
    	obj[p] = obj[p] ? obj[p] + 1 : 1;
    }
    console.log(obj); // { leo: 1, kiki: 1, eden: 1 }

    /*completion에 있는 경우 value 값 -1*/
    for (let c of completion) {
    	obj[c] -= 1;
    }
    console.log(obj); // { leo: 1, kiki: 0, eden: 0 }

    for (let key in obj) {
    	if (obj[key] == 1) {
    		return key;
    	}
    }
    ```
