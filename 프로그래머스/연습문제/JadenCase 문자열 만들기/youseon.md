## 패스 코드

- 이전에 문자열을 다루는 알고리즘에서 알파벳인지 판별하고 대문자, 소문자로 치환했던게 있어서 해당 방법으로 풀었더니 바로 패스됐다.
- 그리고, 다른 사람의 풀이를 보니.. 다른 사람에 비해서 시간복잡도가 오래 걸릴 것 같아서 리팩토링이 필요해보인다..

```python
def solution(s):
    answer = ''
    string = s.split(' ')
    for word in string:
        fixed = ''
        for idx in range(len(word)):
            if(word[idx].isalpha()):
                if(idx == 0):
                    fixed += word[idx].upper()
                else:
                    fixed += word[idx].lower()
            else: fixed += word[idx]

        answer += fixed+ ' '

    answer = answer[:len(answer)-1]

    return answer
```

## 다른 사람의 풀이

- capitalize 함수는 주어진 무자열에서 맨 첫 글자를 대문자로 변환시킨다.

```python
def Jaden_Case(s):
    # 함수를 완성하세요
    return s.title()
```

```python
def solution(s):
    return ' '.join([word.capitalize() for word in s.split(" ")])
```

## `capitalize()` 와 `title()` 차이점

`capitalize()`와 `title()`은 단어의 첫 글자를 대문자로 바꿔준다는 공통점이 있지만 바꿔주는 기준이 약간 다르다.

- `capitalize()` : 문장의 **첫 단어의 첫 글자만 대문자**로 바꾸는 경우에 사용.
- `title()` : 문장의 **모든 단어의 첫 글자를 대문자**로 바꾸는 경우에 사용.**주의사항)** title()은 문자열에서 **알파벳 외의 문자(숫자, 특수기호, 띄어쓰기 등)**들을 기준으로 첫 글자를 대문자로 바꾼다.