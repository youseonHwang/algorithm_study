## 시도 1 (sorted 문법만 참고함)

```python
def solution(genres, plays):
    answer = []
    length = len(genres)
    dic = {}
    total = {}
    for index in range(length):
        dic[index]=[genres[index], plays[index]]
        if(total.get(genres[index])):
            total[genres[index]] = total.get(genres[index]) + plays[index]
        else:
            total[genres[index]] = plays[index]

    for arr in dic.values():
        if(arr[0] in total):
            arr.append(total.get(arr[0]))
    
    # 우선순위 수행
    sorted_dic = sorted(dic.items(), key=lambda x: (x[1][2], x[1][1], x[0]), reverse = True)
    
    standard = sorted_dic[0][1][0]
    count = 0
    for x in sorted_dic:
        if(x[1][0] == standard and count <= 1):
            answer.append(x[0])
            count+=1
        elif(x[1][0] != standard):
            count = 0
            standard = x[1][0]
            answer.append(x[0])
            count+=1
        
        
    return answer
```

```python
테스트 1 〉	통과 (0.01ms, 10.3MB)
**테스트 2 〉	실패 (0.01ms, 10.3MB)**
테스트 3 〉	통과 (0.01ms, 10.3MB)
테스트 4 〉	통과 (0.01ms, 10.4MB)
테스트 5 〉	통과 (0.12ms, 10.4MB)
테스트 6 〉	통과 (0.09ms, 10.3MB)
테스트 7 〉	통과 (0.09ms, 10.2MB)
테스트 8 〉	통과 (0.03ms, 10.2MB)
테스트 9 〉	통과 (0.02ms, 10.4MB)
테스트 10 〉	통과 (0.11ms, 10.3MB)
테스트 11 〉	통과 (0.02ms, 10.2MB)
테스트 12 〉	통과 (0.05ms, 10.3MB)
테스트 13 〉	통과 (0.09ms, 10.4MB)
테스트 14 〉	통과 (0.12ms, 10.4MB)
**테스트 15 〉	실패 (0.02ms, 10.4MB)**
```

- 문제점
    - 우선순위 수행할때 고유번호는 낮은순부터 수행해야돼서 reverse를 사용하면 안됨

---

## 수정 코드

```python
def solution(genres, plays):
    answer = []
    length = len(genres)
    dic = {}
    total = {}
    for index in range(length):
        dic[index]=[genres[index], plays[index]]
        if(total.get(genres[index])):
            total[genres[index]] = total.get(genres[index]) + plays[index]
        else:
            total[genres[index]] = plays[index]

    for arr in dic.values():
        if(arr[0] in total):
            arr.append(total.get(arr[0]))
    
    # 우선순위 수행
    sorted_dic = sorted(dic.items(), key=lambda x: (x[1][2], x[1][1], -x[0]), reverse = True)
    
    standard = sorted_dic[0][1][0]
    count = 0
    for x in sorted_dic:
        if(x[1][0] == standard and count <= 1):
            answer.append(x[0])
            count+=1
        elif(x[1][0] != standard):
            count = 0
            standard = x[1][0]
            answer.append(x[0])
            count+=1
        
        
    return answer
```