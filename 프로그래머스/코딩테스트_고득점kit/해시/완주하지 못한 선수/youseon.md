# 문제

### **문제 설명**

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

### 제한사항

- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다.

### 입출력 예

[제목 없음](https://www.notion.so/9049913becde422691d39cb302be9750)

### 입출력 예 설명

예제 #1"leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #2"vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3"mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

# 구현 전 생각

1. 첫번째 파라미터 배열이랑 두번째 파라미터 배열이랑 순서대로 비교하면 되겠다.

## 패스 코드

```python
def solution(participant, completion):
    # 두 배열 모두 이름 순서대로
    participant.sort()
    completion.sort()

    for idx in range(len(completion)) :
        # 순서대로 되어있는데 참가자엔 있는데 완주자엔 없는 경우에 리턴함
        if participant[idx] != completion[idx] :
            return participant[idx]
    # 마지막까지 돌았을 경우엔 마지막
    return participant[len(completion)]
```

## 다른 사람의 풀이 코드

```python
import collections

def solution(participant, completion):
    answer = collections.Counter(participant) - collections.Counter(completion)
    return list(answer.keys())[0]
```

- 느낀점
    - 컬렉션 사용은 생각도 못했네.. 컬렉션에 대해서 찾아봐야겠다
    - 위에 패스코드 배열 sort(정렬)로 사용한 코드가 과연 배열의 길이가 엄청 길때도.. 효율이 있는지 모르겠다.