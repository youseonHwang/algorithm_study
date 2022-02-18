# 최초 작성 코드

## 문제점

1. answer의 리스트 순서가 예상 답안과 일치하지 않음
    
    ⇒ 딕셔너리로 계산 필요 
    

```python
def solution(fees, records):
    answer = []
    
    in_arr = []
    out_arr = []
    for record in records:
        
        print('in_arr => ', in_arr)
        
        record_arr = record.split(' ')
        time = record_arr[0]
        number = record_arr[1]
        inOrOut = record_arr[2]
        minute = timeToMin(time)
        
        if(inOrOut == 'IN'):
            in_arr.append([number, minute])
        else: # out이면
            for arr in in_arr:
                if(arr[0] == number):
                    isEx = False
                    for out in out_arr:
                        if(out[0] == number):
                            isEx = True
                            out[1] = (out[1] + calcFee(fees, minute - arr[1]))
                            print('out갱신',out)
                    if(isEx == False):
                        out_arr.append([number,calcFee(fees, minute - arr[1])])
                    in_arr.remove(arr)
                    break
                    
    if(len(in_arr) > 0):
        for arr in in_arr:
            isEx = False
            for out in out_arr:
                if(out[0] == number):
                    isEx = True
                    out[1] =(out[1]+calcFee(fees, minute - arr[1]))
                    print('out갱신',out)
            if(isEx == False):
                out_arr.append([number,calcFee(fees, minute - arr[1])])

    print('out_arr =>' , out_arr)
    for out in out_arr:
        answer.append(out[1])
    return answer

def calcFee(fees, time):
    if(time <= fees[0]):
        return fees[1]
    else:
        return fees[1] + (((time - fees[0]) // fees[2]) * fees[3])
    
def timeToMin(time):
    hours = int(time.split(':')[0])
    mins = int(time.split(':')[1])
    return (hours * 60) + mins
```

---

# 수정 제출 코드

```python
from collections import defaultdict
import math
def solution(fees, records):
    car_acc_time = defaultdict(int)
    car_time = defaultdict(lambda : -1)
    car_fee = {}
    
    for record in records:
        timer, num, action = record.split()
        hh,mm = map(int,timer.split(':'))
        if action == 'IN':
            car_time[num] = hh*60+mm
        else:
            car_acc_time[num] += (hh*60+mm - car_time[num])
            car_time[num] = -1

    basicTime, basicFee, unitTime, unitFee = fees

    for num in car_time.keys():
        
        # 안빠져나갔으면 23:59 계산해서 일단 시간 더하기
        if (car_time[num] != -1):
            car_acc_time[num] += (23*60+59 - car_time[num])
            
        # 기본시간을 지나지 않았다면
        if (basicTime >= car_acc_time[num]): 
            car_fee[num] = basicFee
            
        # 기본시간 지난 경우 계산
        else:
            car_fee[num] = basicFee + math.ceil((car_acc_time[num] - basicTime)/unitTime)*unitFee

    answer = []
    for key,value in sorted(car_fee.items(), key = lambda x : x[0]):
        answer.append(value)
    return answer
```