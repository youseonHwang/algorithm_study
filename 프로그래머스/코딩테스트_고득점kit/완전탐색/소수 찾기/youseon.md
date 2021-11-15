# 문제

한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

### 제한사항

- numbers는 길이 1 이상 7 이하인 문자열입니다.
- numbers는 0~9까지 숫자만으로 이루어져 있습니다.
- "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.

### 입출력 예

[제목 없음](https://www.notion.so/6d2fcc1261e24579b17043689c909ac6)

### 입출력 예 설명

예제 #1[1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.

예제 #2[0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.

- 11과 011은 같은 숫자로 취급합니다.

# 구현 전 생각

1. 일단 숫자 형태로 조합하고 중복 제거
2. string 형태니깐 int로 변경하고 2부터 자신보다 -1만큼 큰 수까지 반복하면서 소수인지 확인

---

```jsx
from itertools import permutations
def solution(numbers):
    answer = 0
    number = set()
    for x in range(len(numbers)):
        for i in permutations(numbers, x+1):
            str = ''
            if((i[0]) == '0'):
                continue
            else:
                for z in i:
                    str += z
            if(str != ''):
                number.add(int(str))

    for num in number:
        print(num)
        isPrime = False
        if(num != 1):
            for i in range(2, num-1):
                if(num % i == 0):
                    isPrime = True
                    break
            if(isPrime == False):
                answer += 1
    return answer
```