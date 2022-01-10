## 실패 코드

- 실패한 이유를 찾아보니 캐시사이즈가 0인 경우를 고려하지 않음 ㅠ

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dc69544b-0d71-43ec-aedc-98535cc4dcbf/Untitled.png)

```python
def solution(cacheSize, cities):
    answer = 0
    cache = []
    for city in cities:
        city = city.upper()
        exist = city in cache
        if(exist == True):
            answer += 1
            cache.pop(cache.index(city))
            cache.append(city)
        else:
            answer += 5
            if(len(cache) >= cacheSize):
                cache = cache[1:len(cache)]
            cache.append(city)
    return answer
```

## 수정 후 제출 코드

```python
def solution(cacheSize, cities):
    answer = 0
    cache = []
    for city in cities:
        if(cacheSize == 0):
            answer+=5
            continue
        city = city.upper()
        exist = city in cache
        if(exist == True):
            answer += 1
            cache.pop(cache.index(city))
            cache.append(city)
        else:
            answer += 5
            if(len(cache) >= cacheSize):
                cache = cache[1:len(cache)]
            cache.append(city)
    return answer
```