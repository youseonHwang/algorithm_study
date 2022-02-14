# 최초 접근 방법

- 우선 캐릭터 순서대로 반복 돌면서 x축 +1, y축 +1 씩 비교해서 4칸 만들어지는거 모두 배열에 넣기
- 넣어진 배열 중복 제거
- 위쪽 칸 아래로 당기기

## 실패 코드

- 거의 다 됐는데(위쪽 칸 아래로 당기는 부분은 모두 됨) 반복문 돌리는데에서 while 리턴을 타면서 계속 오답이 나옴

```python
def solution(m, n, board):
    # 라이언(R), 무지(M), 어피치(A), 프로도(F), 네오(N), 튜브(T), 제이지(J), 콘(C)
    charArr = ['R','N','A','F','N','T','J','C']
    count = 0
    removeArr = []
    # 배열로 만들기
    for i in range(len(board)):
        board[i] = list(board[i])

    while(True):
        print('시작')
        print(board)
        wasRemove = False
        for char in charArr:
            for y in range(m-2):
                for x in range(n-2):
                    if(board[y][x] == char and board[y][x] != 'X'):
                        checkResult = checkk(board, x, y, char)
                        if(checkResult != None):
                            for check in checkResult:
                              removeArr.append(check)
                        else: continue
                    else: continue
                            
            # 4칸 찾은게 있다면
            if(len(removeArr)> 0):
                wasRemove = True
                remove = []
                # removeArr = list(itertools.chain.from_iterable(removeArr))
                for value in removeArr:
                  if value not in remove: remove.append(value)

                
                for r in remove:
                    count += 1
                    # 첫줄이 아니면
                    standX = r[1]
                    standY = r[0]
                    if(standY != 0):
                        board = breakd(board, standX, standY, char)
                removeArr =[]  
        if(wasRemove == False): return count 
    return count

def checkk(board, x, y, char):
    if(board[y+1][x] == char and 
        board[y][x+1] == char and
        board[y+1][x+1] == char):

        return [[y,x],[y+1,x],[y,x+1],[y+1,x+1]]
    else: return None

def breakd(board, standX, standY, char):
    if(board[standY-1][standX] != 'X' or board[standY-1][standX] == char):
        board[standY][standX] = board[standY-1][standX]
        if(board[standY-1][standX] != 'X'):
            board[standY-1][standX] = 'X'
        if(board[standY-1][standX] == char):
            board[standY-1][standX] = char
    return board
```

# 수정 제출 코드

```python
def solution(m, n, board):
    answer = 0

    for i in range(len(board)):                # board 배열로 만들기
        popped = board.pop(0)
        board.append([p for p in popped])

    while True:                                # 터진 블록이 없을 때까지 반복
        checked = []                           # 이번 턴에 터져야 할 블록들 모음
        for i in range(m - 1):                
            for j in range(n - 1):
                if board[i][j] == "X":         # 이미 블록이 터져 빈 자리면 패스
                    continue
                if board[i][j] == board[i][j + 1]:      # 연속으로 두 개가 동일한 블록이면, 밑에 두 개도 동일한지 확인
                    if board[i][j] == board[i + 1][j] and board[i][j + 1] == board[i + 1][j+1]:
                        checked.append((i, j))
                        checked.append((i, j + 1))
                        checked.append((i + 1, j))
                        checked.append((i + 1, j + 1))         # 터져야 할 블록들 전부 저장

        if len(checked) == 0:             # 이번에 터진 블록이 없으면 종료
            break
        else:
            answer += len(set(checked))   # 모아둔 블록 다 터뜨리기!
            for c in checked:
                board[c[0]][c[1]] = 'X'

            for c in reversed(checked):   # 블록들 내리기
                check_n = c[0] - 1
                put_n = c[0]
                
                while check_n >= 0:       # 터진 자리 위에 있는 블록들을 다 내린다.
                    if board[put_n][c[1]] == "X" and board[check_n][c[1]] != "X":
                        board[put_n][c[1]] = board[check_n][c[1]]
                        board[check_n][c[1]] = "X"
                        put_n -= 1

                    check_n -= 1

    return answer
```