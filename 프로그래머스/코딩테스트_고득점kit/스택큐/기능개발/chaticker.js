function solution(progresses, speeds) {
	let answer = [];
	while (speeds.length > 0) {
		//speeds 값을 progresses 값이 100보다 작으면 계속 더함(개발 시점)
		for (let i = 0; i < speeds.length; i++) {
			if (progresses[i] < 100) {
				progresses[i] += speeds[i];
			}
		}
		//progresses[0]값 제거 -> 가장 첫 번째 값이 100이 되어야 배포 가능하므로(배포 시점)
		let cnt = 0;
		while (progresses[0] >= 100) {
			progresses.shift();
			speeds.shift();
			cnt += 1;
		}
		if (cnt > 0) {
			answer.push(cnt);
		}
	}

	return answer;
}
