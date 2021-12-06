```python
# m = 멜로디 문자열 / musicinfos = 방송된 곡의 정보 배열(시작시간, 종료시간, 제목, 악보정보)
def replacesharp(s):
    return s.replace('C#', 'c').replace('D#', 'd').replace('F#', 'f').replace('G#', 'g').replace('A#', 'a')

def caltime(t):
    a = list(map(int, t.split(":")))
    return a[0]*60+a[1]

def splitinfo(infos):
    playtime = caltime(infos[1])-caltime(infos[0])
    sheet = replacesharp(infos[3])
    a, b = divmod(playtime, len(sheet))
    sheet = sheet*a+sheet[:b]
    return [playtime, infos[2], "".join(sheet)]

def solution(m, musicinfos):
    infos = [splitinfo(info.split(",")) for info in musicinfos]
    print(infos)
    infos = [[idx]+i for idx, i in enumerate(infos) if replacesharp(m) in i[2]]
    try:
        return sorted(infos, key=lambda x: (x[1], -x[0]))[-1][2]
    except:
        return '(None)'
```

### 다른사람의 풀이

```python

def shap_to_lower(s):
    s = s.replace('C#','c').replace('D#','d').replace('F#','f').replace('G#','g').replace('A#','a')
    return s

def solution(m,musicinfos):
    answer=[0,'(None)']   # time_len, title
    m = shap_to_lower(m)
    for info in musicinfos:
        split_info = info.split(',')
        time_length = (int(split_info[1][:2])-int(split_info[0][:2]))*60+int(split_info[1][-2:])-int(split_info[0][-2:])
        title = split_info[2]
        part_notes = shap_to_lower(split_info[-1])
        full_notes = part_notes*(time_length//len(part_notes))+part_notes[:time_length%len(part_notes)]
        if m in full_notes and time_length>answer[0]:
            answer=[time_length,title]
    return answer[-1]
```
