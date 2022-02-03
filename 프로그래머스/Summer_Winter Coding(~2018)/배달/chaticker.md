다익스트라 알고리즘 사용

특정 정점(1)을 시작점으로 나머지 모든 점들에 대한 최단거리를 구하기

1. 노드별 거리를 무한으로 하는 배열 생성(1번 사용하기 위해 N+1의 배열 생성)

   인접한 노드별 시간(가중치)의 정보를 담고 있는 배열 생성

   1-1. 인접한 노드별 시간(가중치)의 정보를 담고 있는 배열에 데이터 추가

   2. 1번 마을에서부터 우선순위 큐 시작 및 초기값 0 할당(시작점이기 때문에)

   3. 우선순위 큐 배열에 값이 없을 때까지 반복

   4. 연결된 노드에서의 값이 현재의 값 + 해당 노드의 시간(가중치) 보다 클 경우, 값을 대체하고 우선순위 큐에 데이터 추가

   5. K이하의 시간에 배달되는 값 filter

---

```javascript
function solution(N, road, K) {
  // 1.
  const dist = Array(N + 1).fill(Infinity);
  const adj = Array.from({ length: N + 1 }, () => []);

  //1-1
  road.forEach(([a, b, c]) => {
    adj[a].push({ to: b, time: c });
    adj[b].push({ to: a, time: c });
  });

  // 2
  const pq = [{ to: 1, time: 0 }];
  dist[1] = 0;

  // 3
  while (pq.length) {
    let { to, time } = pq.pop();

    // 4
    adj[to].forEach((next) => {
      if (dist[next.to] > dist[to] + next.time) {
        dist[next.to] = dist[to] + next.time;
        pq.push(next);
      }
    });
  }

  // 5
  return dist.filter((item) => item <= K).length;
}
```

---

이해가 안되서 찾아보고 함,,다시
