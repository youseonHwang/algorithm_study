# 문제

### **문제 설명**

n개의 음이 아닌 정수가 있습니다. 이 수를 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.

- `1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3`

사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

### 제한사항

- 주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
- 각 숫자는 1 이상 50 이하인 자연수입니다.
- 타겟 넘버는 1 이상 1000 이하인 자연수입니다.

### 입출력 예

[제목 없음](https://www.notion.so/860dc472a9d4497980803acd79ab0948)

### 입출력 예 설명

문제에 나온 예와 같습니다.

# 구현 전 생각

1. 뭔소리지.. 문제 이해를 못함

---

# 아쉬운점

1. 조직도 기능 만들었을때처럼 하나씩 밑으로 내려가면서 아니면 그냥 끝내면 되는데 -, + 가 나와서 언제까지 돌려야 하는지 생각해내지 못햄.. 
2. 완전탐색, bfs, dfs 의 차이점을 조사해봐야겠다
3. 한 2주 뒤에 다시 풀어보는게 좋을거같다

## 패스 코드(풀이법 참고함)

```python
def solution(numbers, target):
    answer = 0
    # numbers의 길이만큼이 이유는 숫자만큼 -, +가 가능하기 때문에!
    num_len = len(numbers)
    
    # 재귀함수 생성
    # 오늘 조직도 기능 수정하다보니깐..재귀함수가 더 눈에 들어옴..
    def dfs(idx, result):
        if idx == num_len:
            print('if-idx는? ',idx)
            print('if-result는? ',result)
            # 원하는 타겟이라는 숫자에 도달했을 경우 
            if result == target:
                # 현재 함수의 바깥쪽에 있는 지역 변수 사용
                # 현재 dfs 함수 내부이기때문에 바깥 함수의 지역변수인 answer에 접근하기 위해서 사용함
                nonlocal answer
                answer += 1
            return
        else:
            print('else-idx는?',idx)
            print('else-result는? ',result)
            # 여기서 두갈래 길로 나누어줌
            dfs(idx+1, result+numbers[idx])
            dfs(idx+1, result-numbers[idx])
    
    # 처음에 idx 0 / result 0으로 초기화하여 재귀함수 호출
    dfs(0,0)
    return answer
```

## 다른 사람의 풀이

```python
from itertools import product
def solution(numbers, target):
    l = [(x, -x) for x in numbers]
    s = list(map(sum, product(*l)))
    return s.count(target)
```

```python
def solution(numbers, target):
    if not numbers and target == 0 :
        return 1
    elif not numbers:
        return 0
    else:
        return solution(numbers[1:], target-numbers[0]) + solution(numbers[1:], target+numbers[0])
```

```python
def dfs(nums, i, n, t):
    ret = 0
    if i==len(nums):
        if n==t: return 1
        else: return 0
    ret += dfs(nums, i+1, n+nums[i], t)
    ret += dfs(nums, i+1, n-nums[i], t)
    return ret

def solution(numbers, target):
    answer = dfs(numbers, 0, 0, target)
    return answer
```