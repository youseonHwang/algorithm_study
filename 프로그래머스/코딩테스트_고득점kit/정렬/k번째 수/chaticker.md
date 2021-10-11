        ```jsx
        //첫 번째 코드
        function solution(array, commands) {
            var answer = [];
            for(let i=0; i<commands.length; i++){
                let newArr = array.slice(commands[i][0]-1, commands[i][1]);
                newArr.sort();
                answer.push(newArr.indexOf(commands[i][2]-1))
            }
            return answer;

        ```

        인덱스를 뽑으니까 안 나오지; 인덱스에 매칭되는 값을 뽑아야함

        ---

        ```jsx
        //두 번째 코드
        function solution(array, commands) {
            var answer = [];
            for(let i=0; i<commands.length; i++){
                let newArr = array.slice(commands[i][0]-1, commands[i][1]);
                newArr.sort();
                answer.push(newArr[commands[i][2] - 1]);
            }
            return answer;
        }
        ```

        왜??? → javascript에서는 sort()로 바로 쓰면 안되고, 함수 형태로 사용해야 함

        ---

        ```jsx
        //세 번째 코드
        function solution(array, commands) {
            var answer = [];
            for(let i=0; i<commands.length; i++){
                let newArr = array.slice(commands[i][0]-1, commands[i][1]);
                newArr.sort(function(a, b)  {
                    return a - b;
                });
                answer.push(newArr[commands[i][2] - 1]);
            }
            return answer;
        }
        ```
