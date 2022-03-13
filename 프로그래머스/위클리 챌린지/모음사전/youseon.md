```python

from itertools import product

def solution(word):
    dict = []
    # product 는 카티션 프로덕트와 비슷
    for i in range(1,6) :
        dict += list(map(''.join, product("AEIOU", repeat = i)))
    dict.sort()

    return dict.index(word) + 1


```
## 위 풀이를 하드코딩한 코드
#### 출처 - 프로그래머스

```python

from itertools import product

def solution(word):
    dict = []
    # product 는 카티션 프로덕트와 비슷
    for i in range(1,6) :
        dict += list(map(''.join, product("AEIOU", repeat = i)))
    dict.sort()

    return dict.index(word) + 1


```

