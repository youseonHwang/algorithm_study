## 실패코드

```python
def solution(skill, skill_trees):
    answer = 0
    orders = []
    asc_arr = []
    for i in range(len(skill_trees)):
        order_arr = []
        for x in range(len(skill)):
            order_arr.append(skill_trees[i].find(skill[x]))
        orders.append(order_arr)
        asc_arr.append(sorted(order_arr))
        
    for i in range(len(orders)):
        if(orders[i] == asc_arr[i]):
            answer += 1
    return answer
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1137625f-d578-464c-8352-980ab4e9286d/Untitled.png)

## 패스 코드

```python
def solution(skill, skill_trees):
    answer = 0
    for skill_tree in skill_trees:
        total = 0
        found = 0
        index = 0
        for skill_name in skill:
            if skill_name in skill_tree:
                total += 1
            # 스킬트리 수만큼 반복하면서 스킬찾음
            while index < len(skill_tree):
                if skill_tree[index] == skill_name:
                    found += 1
                    break
                else: 
                    index += 1
        if total == found:
            answer += 1

    return answer
```