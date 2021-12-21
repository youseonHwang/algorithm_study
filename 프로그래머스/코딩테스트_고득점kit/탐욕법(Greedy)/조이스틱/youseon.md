
## 테스트케이스 1만 통과한 코드
```python
import re
def solution(name):
    answer = 0
    reverse_answer = 0
    alpha_length = len(name)
    number = 0
    pattern = re.compile('[B-Z]')
    # 앞으로 움직일 때
    for idx in range(alpha_length):
        if(idx < alpha_length-1):
            if(name[idx+1] == 'A'): # 중간에 A를 만났는데 끝까지 AAAA이런식이면 굳이 안가도됨
                confirm_arr = name[idx+1:]
                if(len(pattern.findall(confirm_arr)) == 0):
                    break
        
        if(idx >= 1):
            number += 1
        if(ord(name[idx]) < 78):
            answer += ord(name[idx]) - 65
        else:
            answer += abs(ord(name[idx]) - 91)
    
    answer += number
    number = 0
    # 뒤로 움직일 때
    for idx in reversed(range(alpha_length)):
        if(idx > alpha_length-1):
            if(name[idx-1] == 'A'): # 중간에 A를 만났는데 끝까지 AAAA이런식이면 굳이 안가도됨
                confirm_arr = name[:idx-1]
                if(len(pattern.findall(confirm_arr)) == 0):
                    break
        number += 1
        if(ord(name[idx]) < 78):
            reverse_answer += ord(name[idx]) - 65
        else:
            reverse_answer += abs(ord(name[idx]) - 91)
    
    
    reverse_answer += number-1
    print(reverse_answer)
    if(answer > reverse_answer):
        print('answer이 더 큼', answer)
        return reverse_answer
    else:
        return answer
```

## 샘플테스트 케이스 둘 다 통과하여 제출 채점 2개 실패 코드

#### 생각하지 못한 케이스가 있는 것 같은데.. 어떤 케이스인지 확인이 어렵다 ㅠㅠ

```python
테스트 1 〉	통과 (0.08ms, 10.3MB)
테스트 2 〉	통과 (0.08ms, 10.4MB)
테스트 3 〉	실패 (0.08ms, 10.3MB)
테스트 4 〉	통과 (0.10ms, 10.4MB)
테스트 5 〉	통과 (0.10ms, 10.3MB)
테스트 6 〉	통과 (0.13ms, 10.3MB)
테스트 7 〉	통과 (0.14ms, 10.2MB)
테스트 8 〉	통과 (0.08ms, 10.3MB)
테스트 9 〉	통과 (0.08ms, 10.3MB)
테스트 10 〉	통과 (0.10ms, 10.3MB)
테스트 11 〉	실패 (0.20ms, 10.2MB)
```

```python
import re
def solution(name):
    answer = 0
    reverse_answer = 0
    alpha_length = len(name)
    number = 0
    pattern = re.compile('[B-Z]')
    # 앞으로 움직일 때
    for idx in range(alpha_length):
        if(idx < alpha_length-1):
            if(name[idx+1] == 'A'): # 중간에 A를 만났는데 끝까지 AAAA이런식이면 굳이 안가도됨
                confirm_arr = name[idx+1:]
                if(len(pattern.findall(confirm_arr)) == 0): # B-Z있는지 확인
                    break
        
        if(idx >= 1):
            number += 1
        if(ord(name[idx]) < 78):
            print(ord(name[idx]) - 65)
            answer += ord(name[idx]) - 65
        else:
            print(abs(ord(name[idx]) - 91))
            answer += abs(ord(name[idx]) - 91)
    answer += number
    number = 1
    
    # 뒤로 움직일 때
    for idx in reversed(range(1, alpha_length)):
        if(idx == alpha_length-1):
            if(ord(name[0]) < 78):
                reverse_answer += ord(name[0]) - 65
            else:
                reverse_answer += abs(ord(name[0]) - 91)

        if(ord(name[idx]) < 78):
            reverse_answer += ord(name[idx]) - 65
        else:
            reverse_answer += abs(ord(name[idx]) - 91)
        if(idx > 0):
            if(name[idx-1] == 'A'):
                confirm_arr = name[1:idx]
                if(len(pattern.findall(confirm_arr)) == 0):
                    break;
        number += 1
    reverse_answer += number
    if(answer > reverse_answer):
        return reverse_answer
    else:
        return answer
```

## 위 실패 후 제출 코드(검색하여 참고함)
1. 왼쪽에서 오른쪽으로만 이동
2. A가 나올 때까지 이동했다가 반대방향으로 이동
``` python
def solution(name):
    answer = 0
    min_move = len(name) - 1
    next = 0
    
    for i, char in enumerate(name):
        answer += min(ord(char) - ord('A'), ord('Z') - ord(char) + 1)
        
        next = i + 1
        while next < len(name) and name[next] == 'A':
            next += 1
        
        min_move = min(min_move, i + i + len(name) - next)
    answer += min_move
    return answer
```