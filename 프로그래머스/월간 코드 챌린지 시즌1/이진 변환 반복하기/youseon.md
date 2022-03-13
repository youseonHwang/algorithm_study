- 2진수 포맷 함수만 알고 있다면 간단한 문제

```python
def solution(s):
    answer=[]
    count = 0
    zero = 0
    while(s != "1"):
        zero += s.count("0")
        s = toBinary(s)
        count += 1

    return [count,zero]

def toBinary(s):
    s = s.replace("0","")
    return format(len(s), 'b')
```