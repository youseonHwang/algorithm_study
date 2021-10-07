# 프린터

날짜: 2021년 10월 4일
태그: 레벨2, 스택/큐, 프로그래머스

# 문제

일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄합니다. 그렇기 때문에 중요한 문서가 나중에 인쇄될 수 있습니다. 이런 문제를 보완하기 위해 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발했습니다. 이 새롭게 개발한 프린터는 아래와 같은 방식으로 인쇄 작업을 수행합니다.

`1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
3. 그렇지 않으면 J를 인쇄합니다.`

예를 들어, 4개의 문서(A, B, C, D)가 순서대로 인쇄 대기목록에 있고 중요도가 2 1 3 2 라면 C D A B 순으로 인쇄하게 됩니다.

내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고 싶습니다. 위의 예에서 C는 1번째로, A는 3번째로 인쇄됩니다.

현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때, 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요.

### 제한사항

- 현재 대기목록에는 1개 이상 100개 이하의 문서가 있습니다.
- 인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻입니다.
- location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.

### 입출력 예 설명

예제 #1

문제에 나온 예와 같습니다.

예제 #2

6개의 문서(A, B, C, D, E, F)가 인쇄 대기목록에 있고 중요도가 1 1 9 1 1 1 이므로 C D E F A B 순으로 인쇄합니다.

# 구현 전 생각

1. 중첩 반복문 돌면서 맨 앞에 있는거랑 뒤에 있는거 비교를 하면서 pop() append() 메소드 이용해서 정렬하고, 맨 앞이 가장 큰 수일 경우 잘라내고 카운트 1을 올리기

---

# 아쉬운점

1. 리스트 사용
2. 파이썬 문법을 잘 몰라서 리스트 특징을 잘 몰라서 많이 헤맴

---

## 실패 코드

```python
def solution(priorities, location):
    number = 0
    dictionary = {i : priorities[i] for i in range(len(priorities))}
    want = priorities[location]
    for i in range(0, len(priorities)):
        number += 1
        standard = priorities[i]
        if(standard == want):
            return number
        if(standard == max(priorities)):
            priorities.pop(0)
            continue
        for x in range(0, len(priorities)):
            print('x 반복문 ')
            if(standard < priorities[x]):
                print('기준이 작음')
                priorities.pop(0)
                priorities.append(dictionary[i])
                break
            else:
                return number
```

![Untitled](%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A5%20fedb0a7953f84ccaa249a7012438fa59/Untitled.png)

## 패스 코드

```python
def solution(priorities, location):
    number = 0
    enum_list = [(p, i) for (i, p) in enumerate(priorities)] # enumerate 리스트
    print(enum_list)
    while enum_list: # enumerate 리스트 반복
        prior = enum_list.pop(0) # 첫번째 대기 문서
        if enum_list:
            p_list = [priority for priority, idx in enum_list] # 남아있는 문서들의 우선순위 배열
            print(p_list)
        
        if p_list:
            if prior[0] >= max(p_list):
                if prior[1] == location:
                    return number + 1
                else:
                    number += 1
            else:
                enum_list.append(prior)
```