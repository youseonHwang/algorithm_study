# 문제

### **문제 설명**

짝지어 제거하기는, 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다. 먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다. 그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다. 이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다. 문자열 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성해 주세요. 성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴해주면 됩니다.

예를 들어, 문자열 S = `baabaa` 라면

b *aa* baa → *bb* aa → *aa* →

의 순서로 문자열을 모두 제거할 수 있으므로 1을 반환합니다.

### 제한사항

- 문자열의 길이 : 1,000,000이하의 자연수
- 문자열은 모두 소문자로 이루어져 있습니다.

---

### 입출력 예

[제목 없음](https://www.notion.so/87b7ed53186e4b1a80447072f1e352f6)

### 입출력 예 설명

입출력 예 #1위의 예시와 같습니다.입출력 예 #2문자열이 남아있지만 짝지어 제거할 수 있는 문자열이 더 이상 존재하지 않기 때문에 0을 반환합니다.

## 실패코드

```markdown
정확성  테스트
테스트 1 〉실패 (0.01ms, 10.2MB)
테스트 2 〉통과 (139.32ms, 10.4MB)
테스트 3 〉실패 (시간 초과)
테스트 4 〉실패 (시간 초과)
테스트 5 〉실패 (시간 초과)
테스트 6 〉실패 (시간 초과)
테스트 7 〉실패 (시간 초과)
테스트 8 〉실패 (시간 초과)
테스트 9 〉실패 (0.00ms, 10.2MB)
테스트 10 〉통과 (0.08ms, 10.2MB)
테스트 11 〉실패 (0.01ms, 10.3MB)
테스트 12 〉실패 (0.01ms, 10.3MB)
테스트 13 〉통과 (0.01ms, 10.3MB)
효율성  테스트
테스트 1 〉실패 (시간 초과)
테스트 2 〉실패 (시간 초과)
테스트 3 〉실패 (시간 초과)
테스트 4 〉실패 (시간 초과)
테스트 5 〉실패 (시간 초과)
테스트 6 〉실패 (시간 초과)
테스트 7 〉실패 (시간 초과)
테스트 8 〉실패 (시간 초과)
```

```python
def solution(s):
    standard = s
    answer = -1

    while len(standard) > 1:
        str = returnStr(standard)
        if(str ==''):
            answer = 0
            break;
        else:
            splited = standard.split(str,maxsplit=1)
            standard = splited[0]+ splited[1]
    if(len(standard) == 0):
        answer = 1
    return answer

def returnStr(list):
    str = ''
    for i in range(len(list)-1):
        if(list[i] == list[i+1]):
            str = list[i]+list[i+1]
            break
    return str

```

## 개선코드

```python
def solution(s):
    stack = []
    for c in s:
        if stack:
            if stack[-1] == c:
                stack.pop()
            else:
                stack.append(c)
        else:
            stack.append(c)
    if stack:
        return 0
    else:
        return 1
```