### 제출 코드

```python
def solution(arr1, arr2):
    x = len(arr2[0])
    y = len(arr1)
    answer = []
    for i in range(len(arr1)):
        temp = []
        for j in range(len(arr2[0])):
            sum = 0
            for k in range(len(arr1[0])):
                sum += arr1[i][k] * arr2[k][j]
            temp.append(sum)
        answer.append(temp)
    return answer
```

### 아쉬운 점
- 생각보다 쉬운 문제인데 처음에 문제 읽고 나서 행렬 곱셈하는 법 생각 안나서..찾아봄
- 반복문 돌리는 부분에서 버벅댐
