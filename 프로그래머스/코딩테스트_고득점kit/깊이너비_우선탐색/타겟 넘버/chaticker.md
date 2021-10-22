코드 짜기 전에
![KakaoTalk_20211022_184500709](https://user-images.githubusercontent.com/23302973/138439207-64d4672c-1b68-4530-9342-d6a7e138385b.jpg)

```javascript
//1차 코드
function solution(numbers, target) {
  let answer = 0;
  dfs(0, 0);

  function dfs(idx, sum) {
    if (idx < numbers.length) {
      if (sum === target) {
        answer++;
      } else {
        //+일 경우의 재귀
        dfs(idx + 1, sum + numbers[idx]);
        //-일 경우의 재귀
        dfs(idx + 1, sum - numbers[idx]);
      }
    }
  }
  return answer;
}
```

![캡처](https://user-images.githubusercontent.com/23302973/138439466-a812cbf5-026f-4424-8003-db8aad2d740f.PNG)

조건 체크가 잘못됐나?
→ if문 안에서는 target과 일치하는지만 체크해야하고, 재귀는 if문 밖에서 계속 돌도록 처리해야함. 아래 조건문 처리 다른 사람 코드 참고 했는데 이해가 안 가서 설명 덧붙임

---

```javascript
//2차 코드
function solution(numbers, target) {
  let answer = 0;
  dfs(0, 0);
  function dfs(idx, sum) {
    //트리의 깊이(idx)가 numbers 배열의 길이와 같아졌을 때,
    if (idx === numbers.length) {
      //target과 같은 값이면 answer++
      if (sum === target) {
        answer++;
      }
      return;
    }
    //dfs(index + 1, sum + numbers[index]) 부분이 계속 실행되다음 인덱스의 숫자가 (+) 인 자식 노드를 계속 탐색
    dfs(idx + 1, sum + numbers[idx]);
    //마지막 노드까지 갔을 경우 해당 노드를 지우면서, 형제 노드순차적으로 탐색
    dfs(idx + 1, sum - numbers[idx]);
  }
  return answer;
}
```

- 모든 숫자가 (+)인 경우를 모두 탐색한 뒤 다음 인덱스의 숫자가 (-)인 경우를 탐색
- 마지막 인덱스에 다다랐을 경우(index = 5, sum = 5 일 때) 해당 함수를 스택에서 제거한 뒤, index가 4일 때 dfs(index + 1, sum - numbers[index]) 을 실행하여 (-)인 자식 노드를 탐색
