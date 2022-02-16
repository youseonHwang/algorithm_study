```python
from itertools import combinations_with_replacement as com_re

def solution(n, info):
    answer = [0 for _ in range(11)]
    win = False
    max_num = 0   # 라이언이 이길때 가장큰 점수 차이
    # 1. 중복 조합을 이용해 라이언의 점수를 만든다.
    for com in list(com_re(range(0, 11), n)):
        now = [0 for _ in range(11)]
        for c in com:
            now[10 - c] += 1
        lion_total = 0
        peach_total = 0
        # 2. 라이언 점수와 어피치 점수 비교한다.
        for i, (lion_score, peach_score) in enumerate(zip(now, info)):
            if lion_score == peach_score == 0: # 둘 다 0점이면
                continue
            if peach_score >= lion_score: # 어피치 점수가 높으면
                peach_total += (10 - i)
            elif lion_score > peach_score: # 라이언 점수가 높으면
                lion_total += (10 - i)
        # 3. 총 점수를 비교해 라이언이 큰 경우 결과를 업데이트 해준다.
        if lion_total > peach_total:
            win = True
            if (lion_total - peach_total) > max_num:
                max_num = lion_total - peach_total
                answer = now
    if not win:
        return [-1]
    return answer
```