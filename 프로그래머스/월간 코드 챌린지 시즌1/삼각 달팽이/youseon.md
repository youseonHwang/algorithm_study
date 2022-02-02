## 제출 코드

```python

def solution(n):
    answer = []

    # make empty array
    for i in range(n):
        arr = []
        for j in range(i+1):
            arr.append(0)
        answer.append(arr)
    xVal = -1
    yVal = 0
    value = 1
    for x in range(n):
        for y in range(x, n):
            if(x % 3 == 0):
                xVal += 1
            elif x % 3 == 1:
                yVal += 1
            elif x % 3 == 2:
                xVal -= 1
                yVal -= 1
            answer[xVal][yVal] = value
            value += 1
    answer = sum(answer, [])

    return answer
```
