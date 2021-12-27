# 풀기 전 생각

1. 회전하는 것에 뭔가 규칙이 있을 것 같아서 임의로 6:7 사이즈의 그림을 그려서 회전하면서 생각해봄
2. 모서리 부분을 제외하고는 규칙이 존재해서 해당 부분을 이용해보려고 함

---

# 아쉬운 점

1. 임의로 회전해보면서 생각하다보니깐 겹치는 부분을 어떻게 처리해야 할 지에 대한 고민이 생겼는데 힌트가 필요해서 해당 부분만 검색해서 참고 함

---

# 스스로 칭찬

1. 바로 코드짜지 않고 규칙 찾아서 한 점
2. 한번에 통과 ! 
3. 아쉬운 점을 제외하고는 스스로 생각한 코드!

---

## 패스 코드

```python
def solution(rows, columns, queries):
    answer = []
    array =  [[0] * columns for _ in range(rows)]
    cnt = 0
    mini = 0
    for i in range(rows):
        for j in range(columns):
            cnt += 1
            array[i][j] = cnt

    for query in queries:
        startCol = (query[1])-1 #1
        startRow = (query[0])-1 #1
        endCol = (query[3])-1 #4
        endRow = (query[2])-1 #3

        tmp = array[startRow][startCol] # 값이 변경되므로 나중에 넣어줘야 하는 값 (좌측 상단 첫번째)
        mini = tmp
        for y in range(rows): # 열
            for x in range(columns): # 행
                # 왼쪽
                if(x == startCol and y > startRow and y<= endRow):
                    array[y-1][x] = array[y][x]
                    if(array[y][x] < mini): mini = array[y][x]
                # 아래
                if(y == endRow and x > startCol and x<= endCol):
                    array[y][x-1] = array[y][x]
                    if(array[y][x] < mini): mini = array[y][x]
        for y in reversed(range(rows)):
            for x in reversed(range(columns)): # 행
                # 오른쪽
                if(x == endCol and y > startRow and y<= endRow):
                    array[y][x] = array[y-1][x]
                    if(array[y][x] < mini): mini = array[y][x]
                # 위
                if(y == startRow and x > startCol and x<= endCol):
                    array[y][x] = array[y][x-1]
                    if(array[y][x] < mini): mini = array[y][x]

        array[startRow][startCol+1] = tmp # 덮어진 값에 회전 전에 빼놓은 값 넣기
        answer.append(mini)
    return answer
```