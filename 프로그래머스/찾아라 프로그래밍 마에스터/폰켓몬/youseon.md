## 실패코드

```python
import math
def solution(nums):
    answer = 0
    maxN= len(nums)/2
    if(maxN <= 0):
        return 0
    else:
        standard = nums[0]
        answer +=1
    for num in nums:
        if(answer == maxN):
            return answer
        if(standard != num):
            standard = num
            answer += 1
    return answer
```

## 패스코드

```python
def solution(nums):
    maxNum= int(len(nums) / 2)
    nums = set(nums)
    answer = min(len(nums), maxNum)
    return answer
```