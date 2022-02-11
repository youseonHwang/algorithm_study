1. 1차원 배열 -> 2차원 배열로 변환
2. 반복문을 돌면서 위, 아래 일치하는 문자 체크
3. 다시 반복문 돌면서 일치하는 문자를 0으로 바꿈
4. 배열 내 0의 개수 리턴
5. ? 문자가 깨진 후, 새로운 문자가 내려오는 건 ?

---

```javascript
function solution(m, n, board) {
	// 1. 2차원 배열로 변환
	board = board.map((v) => v.split(""));

	while (true) {
		// 2. 반복문을 돌면서 위, 아래 일치하는 문자(지울 블록) 체크
		const arr = [];
		for (let i = 0; i < m - 1; i++) {
			for (let j = 0; j < n - 1; j++) {
				if (
					board[i][j] && // 해당 문자 포함
					board[i][j] === board[i + 1][j] && // 행
					board[i][j] === board[i][j + 1] && // 열
					board[i][j] === board[i + 1][j + 1] // 행 + 열
				) {
					console.log("[i, j]?", [i, j]);
					arr.push([i, j]);
				}
			}
		}

		console.log("arr?", arr);

		// 4. 더이상 지울 블록이 없으면 배열 내 0의 개수 리턴
		if (!arr.length) {
			return [].concat(...board).filter((v) => !v).length;
		}

		// 3. 다시 반복문 돌면서 일치하는 문자를 0으로 바꿈
		for (let i = 0; i < arr.length; i++) {
			const col = arr[i][0];
			const row = arr[i][1];
			board[col][row] = 0;
			board[col][row + 1] = 0;
			board[col + 1][row] = 0;
			board[col + 1][row + 1] = 0;
		}

		// 5. 문자가 깨진 후, 새로운 문자가 내려오는 건 -> 다른 사람 코드 봄
		for (let i = m - 1; i > 0; i--) {
			// 아래에서부터 탐색
			if (!board[i].some((v) => !v)) continue; // 0이 아닌 부분 제외

			for (let j = 0; j < n; j++) {
				// 없어질 공간 대체해주기
				for (let k = i - 1; k >= 0 && !board[i][j]; k--) {
					if (board[k][j]) {
						board[i][j] = board[k][j];
						board[k][j] = 0;
						break;
					}
				}
			}
		}
	}
}
```
