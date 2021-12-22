## 실패코드

- 반복문 돌면서 가장 큰 수로 누적하는 것이 정답이라고 착각했음
- 위 방법이 아니라 최선의 방법을 찾는 것이 목적이므로 동적프로그래밍을 다시 공부하고(ex. 피보나치 수열) 접근 시도

```python
def solution(land):
    answer = 0
    location = None
    for arr in land:
        tmp = max(arr)
        current_loc = arr.index(tmp)
        if(current_loc != location):
            location = current_loc
            answer += arr[location]
            continue
        sorted_arr = sorted(arr, reverse = True)
        second = sorted_arr[1]
        current_loc = arr.index(second)
        location = current_loc
        answer += arr[location]
    return answer
```

풀이방식은 다음과 같습니다.

- land의 **row 1부터 끝까지** 탐색

![https://blog.kakaocdn.net/dn/bsIwi6/btqT91kg2gJ/KYqilFyRXDKOiuxEkUMHr1/img.png](https://blog.kakaocdn.net/dn/bsIwi6/btqT91kg2gJ/KYqilFyRXDKOiuxEkUMHr1/img.png)

- 각 칸마다 **윗 층에서 자기 열을 뺀 나머지 열 중 최댓값** 골라 더하기

![https://blog.kakaocdn.net/dn/bZ5Irp/btqT7Xo8Uaj/EGQx8rmd3zFbKg6RDKP4Bk/img.png](https://blog.kakaocdn.net/dn/bZ5Irp/btqT7Xo8Uaj/EGQx8rmd3zFbKg6RDKP4Bk/img.png)

- **맨 마지막 열**에서 **최댓값** 선택

![https://blog.kakaocdn.net/dn/BMwfH/btqT6G85Q07/AqET4kjZqWkGRiOaRkEdwK/img.png](https://blog.kakaocdn.net/dn/BMwfH/btqT6G85Q07/AqET4kjZqWkGRiOaRkEdwK/img.png)

## 참고 코드

- 첫번째 줄은 두번째 줄 최댓값부터 계산되기때문에 1부터(1행부터) 시작
- 두번째 줄부터 위에서 본인의 열을 제외한 것중에서 가장 큰 수를 더해서 본인의 수를 바꿈
- 마지막까지 계속 반복
- 마지막줄이 다 바뀌면 그 중에서 가장 큰 수를 반환

```python
def solution(land):
    for i in range(1, len(land)):
        for j in range(4):
            land[i][j] += max(land[i-1][k] for k in range(4) if k != j)
    
    return max(land[-1])
```