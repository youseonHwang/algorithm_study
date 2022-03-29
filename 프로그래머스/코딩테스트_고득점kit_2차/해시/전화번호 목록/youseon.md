### 최초 코드

```python
def solution(phone_book):
    phone_book.sort()
    for number in phone_book:
        leng = len(number)
        for p in phone_book:
            if p == number: continue
            if(p[:leng] == number): return False
    return True
```

- 문제점
    - 테스트는 모두 통과하나 효율성 테스트 3,4를 통과하지 못함

---

### 수정 코드 1 (내장 함수 이용)

```python
def solution(phone_book):
    phone_book.sort()
    for p1, p2 in zip(phone_book, phone_book[1:]):
        if p2.startswith(p1):
            return False
    return True
```

### 수정 코드 2 (해시 이용)

```python
def solution(phone_book):
    hash_table={}
    for i in phone_book:
        hash_table[i]=1
        
    for ind, phone_number in enumerate(phone_book):
        temp=""
        for i in phone_number:
            temp+=i
            if temp in hash_table and temp!=phone_number:
                return False
    return True
```