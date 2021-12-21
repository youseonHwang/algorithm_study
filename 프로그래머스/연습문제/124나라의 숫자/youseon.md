#### 처음에 문제 풀이 이해를 잘못해서 샘플케이스만 통과하고 한참 고생했다..
```python
def solution(n):
    nums = [1, 2, 4]
    answer = ''
    while (n > 0):
        n -= 1
        answer = str(nums[n % 3]) + answer
        n = n // 3
    return answer
```