```python
def solution(n, arr1, arr2):
    answer = []
    for i in range(n):
        b1 = bin(arr1[i])[2:] 
        b1 = "0" * (n - len(b1)) + b1
        b2 = bin(arr2[i])[2:]
        b2 = "0" * (n - len(b2)) + b2

        toString = ""
        for j in range(n):
            if b1[j] == "0" and b2[j] == "0":
                toString += " "
            else:
                toString += "#"
        answer.append(toString) 

    return answer
```
