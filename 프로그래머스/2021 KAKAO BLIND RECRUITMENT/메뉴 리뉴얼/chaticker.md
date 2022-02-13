```javascript
const combination = (arr, num) => {
  let result = [];
  //num이 1이 될때 까지 재귀함수를 통해 반복한다.
  if (num === 1) return arr.map((e) => [e]);
  for (let i = 0; i < arr.length; i++) {
    let rest = arr.slice(i + 1);
    let combinations = combination(rest, num - 1);
    //map함수를 통해 [i, + combinations[x]]를 합쳐준다.
    let combiArr = combinations.map((x) => [arr[i], ...x]);
    //result에 combiArr을 이어 붙여준다.
    result.push(...combiArr);
  }
  return result;
};

function solution(orders, course) {
  //d : 메뉴의 조합
  const d = new Map();
  //m : 몇가지 조합인지
  const m = new Map();

  for (const order of orders) {
    for (const n of course) {
      for (let tmp of combination(order.split("").sort(), n)) {
        //배열을 문자열로 변환
        tmp = tmp.join("");
        //d가 tmp를 가지고 있지 않으면 tmp : 0 삽입
        if (!d.has(tmp)) d.set(tmp, 0);
        //m이 n을 가지고 있지 않으면 n : 2 삽입
        if (!m.has(n)) m.set(n, 2);
        //d[tmp]의 값을 가져와서 1을 더함
        const c = d.get(tmp) + 1;
        //m[n]의 값을 가져옴
        const x = m.get(n);
        //tmp의 개수 초기화
        d.set(tmp, c);
        //x와 c를 비교해서 더큰 값으로 초기화
        m.set(n, x > c ? x : c);
      }
    }
  }
  //d의 요소에서 filter함수를 통해 value값이
  //m 요소에서 d의 key값의 길이와 같은 값만 필터링 한 후
  //map함수를 통해 key값만 추출한뒤 정렬
  return Array.from(d.entries())
    .filter(([v, c]) => c == m.get(v.length))
    .map(([v, c]) => v)
    .sort();
}
```
