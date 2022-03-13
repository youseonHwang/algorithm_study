- 재귀함수를 이용하는 방법이 제일 나은데 x,y 값 지정하는데 문제가 발생해서 코드 참조함

```python
from itertools import chain

def solution(arr):
    # 재귀함수 구현
    def quad(arr):

        arr_len = len(arr) # arr의 길이
        unit = arr_len // 2 # arr을 나누기 위해 사용할 단위
        arr_sum = sum(chain(*arr)) # arr의 모든 요소를 합한 것.
        # chain은 다배열을 1차원 배열로 합쳐주는 함수

        if arr_len == 1: # 마지막까지 압축되지 않았을 경우
            return [arr[0][0]]
        elif arr_sum == arr_len * arr_len: # 모든 요소가 1일 경우
            return [1]
        elif arr_sum == 0: # 모든 요소가 0일 경우
            return [0]

        # arr을 4개의 배열로 나눔

        arr1 = [ar[0:unit] for ar in arr[0:unit]]
        arr2 = [ar[unit:] for ar in arr[0:unit]]
        arr3 = [ar[0:unit] for ar in arr[unit:]]
        arr4 = [ar[unit:] for ar in arr[unit:]]

        result = quad(arr1) + quad(arr2) + quad(arr3) + quad(arr4)  # 나눈 4개의 배열을 다시 확인

        return result

    # 함수 대입
    answer = quad(arr)
    return [answer.count(0), answer.count(1)]
```