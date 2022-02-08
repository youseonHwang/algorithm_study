## 최초 시도 방법

- 맨하탄 거리 구하는 계산식이 있으니깐 적용하고 해당하지 않을경우 중간에 파티션이 있는지 확인해보기
    - 맨하탄 거리 계산식 : 두 테이블 T1, T2가 행렬 (r1, c1), (r2, c2)에 각각 위치하고 있다면, T1, T2 사이의 맨해튼 거리는 |r1 - r2| + |c1 - c2|
- 맨해튼 거리 2이하가 안넘으면 해당 자리 동서남북으로  ±2 파티션 체크

⇒ 맨해튼 거리 체크까지 되었고, 행과 열이 같을 경우 체크하는 것은 해결이 되는데 대각선으로 앉았을 경우의 조건 경우의 수가 많아서 도무지 해결 방법이 생각이 안나 검색해보니 bfs나 dfs로 푸는 것이라고 한다.

⇒ dfs보다 bfs로 방문여부를 체크해서 푸는 것이 더 효율적이라고 해서 수정하였다.

```python
def solution(places):
    answer = []
    arr = [] # P의 위치가 담긴 리스트
    
    for place in places:
        arr_list = []
        for x in range(5):
            print(place[x])
            for y in range(5):
                if(place[x][y] == 'P'):
                    arr_list.append([x,y])
        if(len(arr_list) != 0):
            arr.append(arr_list)

    # 맨해튼 거리 체크
    for room in arr:
        print('room??', room)
        for x in range(len(room)):
            for y in range (x+1, len(room)):
                if(ManhattanCheck(room[x], room[y])):
                    print(room[x] , room[y])
                    print("있음!!!")
    
    return answer

def ManhattanCheck(t1, t2):
    if(abs(t1[0] - t2[0]) + abs(t1[1] - t2[1]) <= 2):
        return True
    return False
```

## 수정 제출 코드

- 참고한 블로그
    
    [[프로그래머스] 거리두기 확인하기 in python](https://eboong.tistory.com/328)
    

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3bd6775a-0386-4812-84df-d6c584ac84ad/Untitled.png)

- 

```python
from collections import deque

D=((-1,0),(1,0),(0,-1),(0,1)) #상,하,좌,우 튜플

def bfs(place, row, col):
    visited=[[False for _ in range(5)] for _ in range(5)] # 우선 False로 채우기
    queue=deque() # 양방향 큐
    visited[row][col]=True # 본인 자리 방문여부 True
    queue.append((row,col,0)) #행,열,거리좌표
    
    while queue:
        now=queue.popleft() # 현재꺼 하나 꺼냄
        if now[2]>2: # 거리좌표가 2보다 크면
            continue
        # 만약 첫번째가 아니라면 큐에 상하좌우 변경된 위치가 now에 들어올 것임
        # 이미 아래 for문 안의 if에서 continue를 만나지 못한거라면 아래 if에서 걸림
        # 따라서 여기가 P면 거리두기 지키지 않은 것
        if (now[2]!=0 and place[now[0]][now[1]]=='P'): # 자기 자신(P)가 아닌 다른 P를 만났다.
            return False
        for i in range(4): # 상하좌우 확인
            nx=now[0]+D[i][0] # 현재 x 값에 상, 하, 좌, 우 좌표 더해서 위치 구하기
            ny=now[1]+D[i][1] # 현재 y 값에 상, 하, 좌, 우 좌표 더해서 위치 구하기
            if nx<0 or nx>4 or ny<0 or ny>4: # 5행 5열을 벗어나면 건너뛰기
                continue
            if visited[nx][ny]: # 이미 방문했다면 패스..
                continue
            if place[nx][ny]=='X': # 파티션이 있다면 패스
                continue
            visited[nx][ny]=True # 방문했음 True 표시
            queue.append((nx,ny,now[2]+1)) # 지금 위치 큐에 넣음
            
    return True
    

def check(place):
    for i in range(5):
        for j in range(5):
            if place[i][j]=='P':
                if bfs(place,i,j)==False:
                    # 거리두기 지키지 x
                    return False
                
    return True
        

def solution(places):
    answer=[]
    for place in places:
        if check(place):
            answer.append(1)
        else:
            answer.append(0)
            
    return answer
```