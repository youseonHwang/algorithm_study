![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/09c13122-d850-40e2-b3cf-68adbe7104fd/Untitled.png)

```python
def solution(s):
    string = s
    answer = ''
    numbers = {
        '0': 'zero',
        '1': 'two',
        '2': 'three',
        '3': 'four',
        '4': 'five',
        '5': 'six',
        '6': 'seven',
        '7': 'eight',
        '8': 'nine',
        '9': 'ten'
    }
    
    while len(string) > 0:
        if string[0].isdigit():
            answer += string[0]
            string = string[1:]
        else:
            for key, value in numbers.items():
                if key == string[: len(value)]:
                    string = string[len(value)+1:]
                    answer += key
                    break
            
    return int(answer)
```

## 패스코드

```python
def solution(s):
    string = s
    answer = ''
    numbers = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine'
    }
    while len(string) >0:
        # 숫자면 통과
        if string[0].isdigit():
            answer += string[0]
            string = string[1:]
        else:
            isTrue = False
            for key, value in numbers.items():
                if value == string[: len(value)]:
                    isTrue = True
                    string = string[len(value):]
                    answer += key
                    break
                if isTrue:
                    continue
    return int(answer)
```