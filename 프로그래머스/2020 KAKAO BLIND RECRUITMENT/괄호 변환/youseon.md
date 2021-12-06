![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/01052eea-d5fd-4ab5-9b06-8df8e3168fd8/Untitled.png)

```python
# 문자열 p를 u, v로 분리하는 함수
def divide(p):
    open_p = 0
    close_p = 0

    for i in range(len(p)):
        if p[i] == '(':
            open_p += 1
        else:
            close_p += 1
        # 열림 닫힘 괄호 수가 동일하면 return
        if open_p == close_p:
            return p[:i + 1], p[i + 1:]

# 문자열 u가 올바른 괄호 문자열인지 확인하는 함수
def check(u):
    stack = []

    for p in u:
        if p == '(':
            stack.append(p)
        else:
            if not stack:
                return False
            stack.pop()

    return True

def solution(p):
    # 과정 1 (입력된게 없으면 빈 문자열 반환)
    if not p:
        return ""

    # 과정 2(u(균형잡힌),v)
    u, v = divide(p)
    print(divide(p))

    # 과정 3(문자열 u가 올바른 괄호 문자열인지 확인)
    if check(u):
        # 과정 3-1 (수행한 결과 문자열을 u에 이어 붙인 후 반환)
        return u + solution(v)
    # 과정 4 ("올바른 괄호 문자열"이 아니라면)
    else:
        # 과정 4-1 ( 빈 문자열에 첫 번째 문자로 '('를 붙입니다.)
        answer = '('
        print('[4-1]', answer)
        # 과정 4-2 ( 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다. )
        answer += solution(v)
        print('[4-2]', answer)
        # 과정 4-3 ( ')'를 다시 붙입니다. )
        answer += ')'
        print('[4-3]', answer)
        # 과정 4-4 ( u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다. )
        for p in u[1:len(u) - 1]:
            if p == '(':
                answer += ')'
            else:
                answer += '('
            print('[4-4]', answer)

        # 과정 4-5 (생성된 문자열을 반환합니다.)
        return answer
```
