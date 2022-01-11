## 실패 코드

- 접근하는 방법은 얼추 맞았지만 모든 조합을 뽑아낸 후 max값을 선별하기 어려움

```python
from itertools import combinations
import collections
def solution(orders, course):
    answer = []
    arr = []
    for order in orders:
        for c in course:
            if(len(order) >= c):
                arr.append(list(map(''.join, combinations(order, c))))
    arr = sum(arr, [])
    for i in range(len(arr)):
        arr[i] = sorted(arr[i])
    arr = sorted(list(map(''.join, arr)))
    counted = collections.Counter(arr)
    
    max_ = max(list(counted.values()))
    print(max_)
    if(max_ >= 2):
        for key,value in counted.items():
            if counted[key] == max_ :
                answer.append(''.join(key))
            
    
    return sorted(answer)
```

## 제출 코드

- 실패 코드에서 애초에 course의 갯수별로 조합해서 선택하는 코드로 수정됨
- 실패코드에서 다 됐는데.. 갯수별 max값 가져오는 부분에서 꼬여서 아쉬움..

```python
from itertools import combinations
from collections import Counter

def solution(orders, course):
    answer = []
    for c in course:
        temp = []
        for order in orders:
            combi = combinations(sorted(order), c)
            temp += combi
        counter = Counter(temp)
        if len(counter) != 0 and max(counter.values()) != 1:
            answer += [''.join(f) for f in counter if counter[f] == max(counter.values())]

    return sorted(answer)
```