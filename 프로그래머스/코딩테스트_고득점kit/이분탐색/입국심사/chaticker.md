1. 왜 이분탐색이지? 했는데, 최소 시간과 최대 시간 사이에서 정답과 가장 가까운 시간을 도출해야하기 때문임
2. 최소 - 최대(예): 0(혹은 1) ~ 60분(6명 모두 10분인 사람한테 받을 경우)
3. 위에서 중간 값을 구한 후, 심사의원 한 사람당 몇 명을 담당할 수 있는지 확인하기
4. 위를 반복하면서 걸리는 시간을 최소로 구하기

```javascript
function solution(n, times) {
  times.sort((a, b) => a - b);
  let left = 1;
  let right = n * times[times.length - 1];
  let answer = right; // 최대값.
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;
    times.forEach((value) => {
      count += Math.floor(mid / value); // 한 사람당 몇명 할 수 있는지
      if (count >= n) {
        answer = Math.min(mid, answer); // 최솟값
        return;
      }
    });
    if (count >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}
```
