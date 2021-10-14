# 문제

### **문제 설명**

매운 것을 좋아하는 Leo는 모든 음식의 스코빌 지수를 K 이상으로 만들고 싶습니다. 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 Leo는 스코빌 지수가 가장 낮은 두 개의 음식을 아래와 같이 특별한 방법으로 섞어 새로운 음식을 만듭니다.

`섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)`

Leo는 모든 음식의 스코빌 지수가 K 이상이 될 때까지 반복하여 섞습니다.Leo가 가진 음식의 스코빌 지수를 담은 배열 scoville과 원하는 스코빌 지수 K가 주어질 때, 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수를 return 하도록 solution 함수를 작성해주세요.

### 제한 사항

- scoville의 길이는 2 이상 1,000,000 이하입니다.
- K는 0 이상 1,000,000,000 이하입니다.
- scoville의 원소는 각각 0 이상 1,000,000 이하입니다.
- 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우에는 -1을 return 합니다.

### 입출력 예

[제목 없음](https://www.notion.so/d564cb857f3c4228813d1657eebcee39)

### 입출력 예 설명

1. 스코빌 지수가 1인 음식과 2인 음식을 섞으면 음식의 스코빌 지수가 아래와 같이 됩니다.새로운 음식의 스코빌 지수 = 1 + (2 * 2) = 5가진 음식의 스코빌 지수 = [5, 3, 9, 10, 12]
2. 스코빌 지수가 3인 음식과 5인 음식을 섞으면 음식의 스코빌 지수가 아래와 같이 됩니다.새로운 음식의 스코빌 지수 = 3 + (5 * 2) = 13가진 음식의 스코빌 지수 = [13, 9, 10, 12]

모든 음식의 스코빌 지수가 7 이상이 되었고 이때 섞은 횟수는 2회입니다.

# 구현 전 생각

1. 이전에 프린터 알고리즘 구현했던것과 비슷하게 반복문 돌리면서 비교 할 것과 기존 것 비교하면서 while 무한 반복문 사용

---

# 아쉬운점

1. 효율성 테스트 통과 못함
    - 아마 sort부분에서.. 효율성이 떨어지는 듯 heapQ를 이용하자

    

# 스스로 칭찬

1. 결과에 대해서는...한번에 통과하여 발전이 보인는듯..

---

## 실패 코드

```python
def solution(scoville, K):
    answer = 0
    mixed_array = scoville
    if(min(scoville) >= K):
        return answer
    while True:
        answer += 1
        mixed_array.sort()
        cal_sc = mixed_array[0:2]
        mixed_array = mixed_array[2:]
        new = cal_sc[0] + (cal_sc[1] * 2)
        mixed_array.insert(0, new)
        if(min(mixed_array) >= K):
            break
        if(len(mixed_array) <= 1 and min(mixed_array) < K):
            answer = -1
            break
        
    return answer
```

## 패스 코드

```python
import heapq
# heapQ를 사용하지 않을 경우 sort를 사용할 수 있는데, 시간 초과가 발생한다.
    # heapq.heapify(list) #기존의 리스트를 오름차순 heapQ로 변환
    # heapq.heappop(list) #list의 가장 작은 값을 return하며 삭제
    # heapq.heappush(list, value) #list에 value를 삽입, 자동으로 정렬한다
    
def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)

    while scoville[0] < K: #가장 작은 수가 기준보다 낮다면 계속
        if len(scoville)>1:
            answer += 1
            first = heapq.heappop(scoville) 
            second = heapq.heappop(scoville) 
            heapq.heappush(scoville, first + second *2)
        else:
            return -1
    return answer
```