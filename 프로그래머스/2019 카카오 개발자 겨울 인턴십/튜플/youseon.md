```python3

def solution(s):
    answer = []
    arr = s.replace('{', '').replace('}}', '').split('},')
    arr.sort(key=len) # 문자열 순대로 정렬
    for string in arr:
        numbers = list(map(int, string.split(',')))
        for number in numbers:
            if number not in answer:
                answer.append(number)
    return answer

```
