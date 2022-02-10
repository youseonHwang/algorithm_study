## 접근 방법

1. 처음엔 연산자 기준으로 잘라서 양 옆으로 괄호를 넣어주고, 한번에 계산하고 리턴하려고 했는데 괄호를 넣을때 오히려 코드가 복잡해질 것 같아서 계산하고 리턴하는 형식으로 생각했다.
2. 조합하는 메소드가 생각이 안나서 해당 부분은 찾아봄

## 첫번째 시도

- 테스트 2에서 300이 나오기는하는데 더 큰 값이 존재함.. 디버깅해봐야할듯

![https://user-images.githubusercontent.com/72364918/153363674-2c88685d-91aa-4718-b29b-6e80809e1cd9.png](https://user-images.githubusercontent.com/72364918/153363674-2c88685d-91aa-4718-b29b-6e80809e1cd9.png)

```python
from itertools import permutations # n개를 뽑아내 순서대로 조합
import operator
import re
import itertools 
def solution(expression):
    answer = 0
    answerArr = []
    splited = split(expression)
    # 연산자의 우선순위를 자유롭게 재정의(같은 순위 없음)
    # print(re.split('(\([^)]*\))',test))
    cases = list(permutations(["+","*","-"]))
    
    for case in cases:
        for operation in case:
            result = calc(operation, splited)
            if(result != None ): 
                splited = result
        if(len(splited) == 1):
            answerArr.append(splited[0])
            splited = split(expression)
    answerArr = list(map(abs,answerArr))
    answer= max(answerArr)
    return answer

def split(expression):
    return re.split('([-|+|*])', expression)

def calc(operation, splited):
    opsArr = { "+": operator.add, "-": operator.sub, "*": operator.mul }
    if(len(splited) > 2):
        for x in range(len(splited)):
            if splited[x] == operation:
                result = opsArr[splited[x]](int(splited[x-1]),int(splited[x+1]))

                new = [splited[:x-1] ,[result] , splited[x+2:]]
                merged = list(itertools.chain.from_iterable(new))
                return merged
    return None
```