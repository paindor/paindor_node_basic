function Looping() {
	//포장마차 리필
	//for       forTest
	//forEach   forEachTEst
	//map		
	//find
	//reduce
	//filter

	this.forTest = function (arr) {
		let returnVal = []
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 0) {
				returnVal.push(arr[i])
			}


		}
		return returnVal
	}

	this.forEachTest = function (arr) {
		let returnVal = []
		arr.forEach(i => { if (i % 2 == 0) returnVal.push(i) })
		return returnVal
	}
	this.mapTest = function (arr) {     // 모든 요소에 계산 입력요소갯수 =출력요소갯수
		return arr.map(i => i * 100)
	}
	this.findTest = function (arr) {
		return (arr.find(function (i) {
			return i > 5
		}))
	}
	/* this.findTest2 = function(arr, id){
		let resultValue = (arr.find(i => i.id == id))
		
		alert(`${resultValue}`)
		return (resultValue == undefined)? '아이디없음' : resultValue.name
		

	} */
	this.reduceTest = function (arr) {
		return arr.reduce((i, j) => i + j)
	}
	this.filterTest = function (arr) {   // 교집합 맞는 것만 뽑는다
		return arr.filter(i => (i % 2 == 0))
	}

	this.ofTest = function (arr) {
		temp = []
		for (const item of arr) {
			temp.push(item.name)
		}
		return temp
	}
	this.fromTest = function (arr) {
		return array.from(arr, i => i + i)

	}
	this.argumentsTest = function () {
		return [...arguments]
	}
	this.joinTest = function () {
		return [...arguments].join("\n ")
	}
	this.sortTest = function () {
		let t1 = [...arguments].sort()
		let t2 = [...t1].reverse()
		return [...t1, ...t2]
	}
	this.reverseTest = function () {
		return [...[...arguments].sort()].reverse()
	}
	this.todos = function (arr) {
		const todos = arr
		// 비교 함수
		function compare(key) {
			return function (a, b) {
				// 프로퍼티 값이 문자열인 경우, - 산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용한다.
				return a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0);
			};
		}

		// id를 기준으로 정렬
		resultval = todos.sort(compare('id'));
		console.log(todos);

		// content를 기준으로 정렬
		arr = resultval.sort(compare('content'));
		let temp = []
		for (const item of arr) {
			temp.push(item.content)
		}
		return temp
		
	}



}

function Excute() {
	const a = new looping()
	a.forTest()
	a.forEachTest()
	a.findTest()
	a.mapTest()
	a.reduceTest()
	a.filterTest()





}

function Looping() {
	// 포장마차리필
	// for forTest
	// forEach
	// map
	// find
	// reduce
	// filter
	this.forTest = function (arr) {
		let returnVal = []
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 0)
				returnVal.push(arr[i])
		}
		return returnVal
	}
	this.forEachTest = function (arr) {
		let returnVal = []
		arr.forEach(i => { if (i % 2 == 0) returnVal.push(i) })
		return returnVal
	}

	this.mapTest = function (arr) {
		return arr.map(i => i * 100)
	}
	this.findTest = function (arr) {
		return arr.find(i => i > 5)
	}

	this.reduceTest = function (arr) {
		return arr.reduce((i, j) => i + j)
	}
	this.filterTest = function (arr) {
		return arr.filter(i => (i % 2 == 0))
	}
	this.ofTest = function (arr) {
		let temp = []
		for (const item of arr) {
			temp.push(item.name)
		}
		return temp
	}
	this.fromTest = function (arr) {
		return Array.from(arr, i => i + i)
	}
	this.argumentsTest = function () {
		return [...arguments]
	}
	this.joinTest = function () {
		return [...arguments].join("\n")
	}
	this.sortTest = function () {
		let t1 = [...arguments].sort()
		let t2 = [...t1].reverse()
		return [...t1, ...t2]
	}
	this.reverseTest = function () {
		return [...[...arguments].sort()].reverse()
	}
	this.todos = function (arr) {
		const todos = arr;

		// 비교 함수
		function compare(key) {
			return function (a, b) {
				// 프로퍼티 값이 문자열인 경우, - 산술 연산으로 비교하면 
				// NaN이 나오므로 비교 연산을 사용한다.
				return a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0);
			};
		}

		// id를 기준으로 정렬
		resultVal = todos.sort(compare('id'));
		console.log(resultVal);

		// content를 기준으로 정렬
		arr = todos.sort(compare('content'));
		let temp = []
		for (const item of arr) {
			temp.push(item.content)
		}
		return temp
	}
	
}
function Util(){
	this.empty = function(){
		elem = [...arguments]
		var e = document.querySelector(elem); 
        
        //e.firstElementChild can be used. 
        var child = e.lastElementChild;  
        while (child) { 
            e.removeChild(child); 
            child = e.lastElementChild; 
        } 
	}
}




