### 코드

- 문제 자체(h-index)를... 이해하기 어려웠던 문제

```python
def solution(citations):
    citations.sort(reverse=True)
    h_index = 0
    for c in citations:
        if c > h_index:
            h_index += 1
    return h_inde
```

---

### 다른 사람의 코드

```python
def solution(citations):
    citations = sorted(citations)
    l = len(citations)
    for i in range(l):
        # h번 이상 인용된 논문이 h편 이상
        # i : 논문이 인용된 횟수
        # l-i : 인용된 논문 개수 최댓값부터 하나씩 줄여나간 것
        if citations[i] >= l-i:
            return l-i
    return 0
```