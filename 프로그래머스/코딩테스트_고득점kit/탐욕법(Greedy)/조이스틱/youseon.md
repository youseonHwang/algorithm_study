
### 테스트케이스 1만 통과한 코드
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