```python
from itertools import product

def solution(clothes):
    answer = 1
    cloth_map = {}
    for cloth in clothes:
        key =  cloth_map.get(cloth[1])
        if(key):
            key.append(cloth[0])
        else:
            cloth_map[cloth[1]]=[cloth[0]]

    # print(len(list(product(*cloth_map.values()))))

    # 경우의 수 구하기            
    for value in cloth_map.values():
        answer *= len(value) + 1

    # 아무것도 입지 않은 경우 하나 제외
    return answer-1
```

- product 조합으로 구하려고 했는데 1개의 조합을 바로 구할 수 없었음..