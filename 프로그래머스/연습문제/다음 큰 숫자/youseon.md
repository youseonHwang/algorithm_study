- 이진수 변환 문제를 풀고 나서 그런지 간단한 문제

```python
def solution(n):
    answer = 0
    num = bin(n)[2:].count('1')

    while True:
        n += 1
        if bin(n)[2:].count('1') == num:
            answer = n
            break
    
    return answer
```