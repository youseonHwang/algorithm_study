- 생각보다 많이 쉬워서.. 한번에 풀었다

``` python
def solution(n):
    answer = 0
    for x in range(1,n+1):
        total = 0
        for y in range(x,n+1):
            print(y)
            total += y
            if(total > n):
                break
            elif(total == n):
                answer += 1
                break
            elif(total < n):
                continue

    return answer

```