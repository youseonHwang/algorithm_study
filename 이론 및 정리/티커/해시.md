## javascript가 없어서 개념 정리로 대체

### **[자바스크립트로 해시 구현하기]**

1.  해시 테이블 생성

    ```javascript
    class HashTable {
    	table = new Array(100);
    	setItem = (key, value) => {};
    	getItem = (key) => {
    		return "";
    	};
    }
    ```

    -> table을 그냥 table = [];로 초기화 하지 않고 길이를 명시해 주는 이유는 나중에 특정 상황에서 길이를 늘리고자 하기 때문(해시 충돌 대응)

    -> setItem에서는 key, value를 파라미터로 받아서 table에 넣어줌

    -> getItem에서는 key를 파라미터로 받아 table에 해당 키에 해당하는 값을 불러옴

    ```javascript
    const myTable = new HashTable();
    myTable.setItem("name", "chaticker");
    myTable.getItem("name");
    ```

    아래의 경우 배열은 인덱스 숫자로만 접근할 수 있기 때문에 string 형태를 key로 사용할 수 없음

    ```javascript
    setItem = (key, value) => {
    	table["name"] = "chaticker";
    };
    ```

    따라서 string 값을 해시 테이블에 넣으려면 string -> number 자료형으로 바꿔야함

    이렇게 해시 테이블의 키를 number 자료혀으로 변환하는 함수를 해시 함수라고 하는 것

2.  해시 함수의 필요성 (예시)

    ```javascript
    function hashStringToInt(s) {
    	// 임시 number 리턴
    	return 3;
    }

    setItem = (key, value) => {
    	// 현재는 무조건 table[3]에 저장됨
    	const idx = hashStringToInt(key);
    	this.table[idx] = value;
    };

    getItem = (key) => {
    	const idx = hashStringToInt(key);
    	return this.table[idx];
    };

    const myTable = new HashTable();
    myTable.setItem("name", "chaticker");

    console.log(myTable.getItem("name")); // chaticker
    ```

3.  해시 함수 작성법

    ```javascript
    function hashStringToInt(s, tableSize) {
    	let hash = 17; // 소수로 정함: 효율적인 key 분산을 위한 것 (임시)

    	// 단순히 숫자로 변환한 값을 더하기만 한다면(hash * s.charCodeAt(i)) 기존에 지정해 준 table의 길이보다 훨씬 커지기 때문에, table의 길이로 hash를 나눈 나머지를 해당 key의 hash로 만들어 준다. 또한 임의의 소수를 한 번씩 더 곱해준다.
    	for (let i = 0; i < s.length; i++) {
    		hash = (13 * hash * s.charCodeAt(i)) % tableSize;
    	}

    	return hash;
    }

    class HashTable {
    	// 해시 함수에서 각 자리의 숫자를 더한 값을 테이블의 길이로 나눈 나머지를 인덱스로 지정하기 때문에 테이블의 길이도 다시 적당한 소수로 설정한다.
    	table = new Array(71);

    	setItem = (key, value) => {
    		const idx = hashStringToInt(key, this.table.length);
    		this.table[idx] = value;
    	};

    	getItem = (key) => {
    		const idx = hashStringToInt(key, this.table.length);
    		return this.table[idx];
    	};
    }

    const myTable = new HashTable();
    myTable.setItem("name", "chaticker");
    myTable.setItem("age", "27");

    console.log(myTable.getItem("name")); // chaticker
    console.log(myTable.getItem("age")); // 27
    ```

문자열을 하나씩 돌면서 숫자로 바꿔준 후, 그 숫자를 해시 테이블의 인덱스를 계산하는 데 활용하는 로직 -> 다른 방법도 많이 있으나, 흔하게 나오는 방법 중에 하나로 작성함
