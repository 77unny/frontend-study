# Functional Programming

> 함수형 프로그래밍, 인프런 유인동님 

[TOC]


## 1. 함수형 프로그램이란?

**순수함수**를 만들고 조합성을 강조하는 프로그래밍 패러다임

### 순수함수란?

- 항상 동일한 인자를 주면 동일한 결과를 리턴하는 함수

- 부수효과가 없는 함수 
  $부수효과? 리턴값으로 결과를 만드는것 외에 외부의 상태를 영향을 미치는것$ 

```javascript
// 순수 함수
function add(a,b){
  return a + b;
}
console.log(add(10,5)); // 15
console.log(add(10,5)); // 15
```



#### 순수하지 않는 함수

##### 순수하지 않는 함수

```javascript
// 순수하지 않는 함수, 외부에 영향을 받는 함수
var c = 10;
function add(a,b){
	return a + b + c;
}
console.log(add(10,5)); // 25
console.log(add(10,5)); // 25
// c 값을 변경하게 되면
c = 5;
console.log(add(10,5)); // 20
console.log(add(10,5)); // 20
```

`변수 c` 상태를 변경한다면, 결과는 다르게 나오게된다. 동일한 인자를 넣었지만 외부의 영향을 받아 결과가 달라지게된다.



##### 부수효과가 있는 함수

```javascript
// 순수하지 않는 함수, 부수효과가 있는 함수
var c = 20;
function add(a,b){
  c = b;
  return a + b;
}
console.log(c) // 20
console.log(add(10,5)) // 15
console.log(c) // 5

```

`add()` 함수에서 외부의 값을 변경함으로 c의 값이 달라지게 된다.



##### 들어온 인자를 변경하는  순수하지 않는 함수

```javascript
// 순수하지 않는 함수, 
var obj1 = {val:10}
function add(obj,b){
	obj.val +=b;
}
console.log(obj1.val) // 10
add(obj1,5)
console.log(obj1.val) // 15

```

순수함수가 아니다. 리턴값도 없으며 실행하면 직접 인자로 들어온 값의 상태를 변경하는 함수
인자를 직접 변경하는것은 순수 함수가 아니다.

<u>그렇다면 순수함수는 값을 변경하는 함수를 만들수 없는것일까?</u>

#### 새로운 값을 변경하는 순수함수

```javascript
var obj1 = {val:10}
const add = (obj,b) => {
 return  {val:obj.val + b} 
}

console.log(obj1.val) // 10
console.log(add(obj1,5).val) // 명령형 15
console.log(obj1.val) // 10
obj1 = {val:15} 
console.log(obj1.val) // 15
console.log(add(obj1,5).val) // 명령형 20

console.log(obj1.val) // 10
const obj2 = add(obj1,5) // obj2로 선언형
console.log(obj2.val) // 15
console.log(obj1.val) // 10
obj1 = {val:15}
console.log(obj1.val) // 15
console.log(obj2.val) // 15 이미 위에서 obj2로 선언하였기때문에 바뀐값에 값이 영향을 받지 않는다.

```

`add()` 에서 `{val:obj.val}` 부분은 외부 `obj.val`를 참조만 하고 add의 내부 객체로 val을 새롭게 만듬

<u>명령형 과 선언형의 차이점을 확인!</u>

obj2는 add함수의 리턴값을 받은 새로운 객체



#### 순수함수 정리

##### 함수형프로그래밍은?

함수형 프로그래밍은 값을 변경해가거나 값을 다룰때 원래의(초기의) 값을 직접 변경하지 않고, 외부의 상태를 변경시키지 않으면서 인자로 받은 값도 변경시키지 않는 프로그래밍

##### 순수함수의 특징

- 동일한 인자를 넣으면 동일한 결과를 리턴한다
- 평가 시점이 중요하지 않기 때문에 언제나 동일한 결과를 리턴한다.

```javascript
// 순수 하지않는 함수의 평가 시점 
var c = 10;
function add(a,b){
  return a + b + c
}
add(10,5) // 25
c = 5 // c의 값이 재정의됨
add(10,5) // 20 c가 한번더 재정의 되었기 때문에 평가 하는 시점에 따라 결과 값이 다르다.
```

```javascript
// 순수 함수의 평가 시점
function add(a,b){
  return a + b
}
add(10,5) // 15
add(10,5) // 15
add(10,5) // 15 어디서 평가 하여도 동일한 결과 값을 가진다.
```

- 안전하고 다루기 쉬운 함수가 된다. 안전하기 때문에 다른곳에서도 조합성을 높일 수 있다.



### 일급함수

자바스크립트에서는 함수가 **일급함수**이다. 즉 **함수를 값**으로 다룰 수 있다.

- 함수를 변수에 담을 수 있다
- 인자로 넘겨줄 수 있다

```javascript
// 함수를 변수에 담을 수 있다.
function add(a,b){
  return a + b;
}
// foo라는 변수에 함수를 담는다. return 결과 값
const foo = function(a) {return a * a};
const poo = add;
```

```javascript
// 함수의 인자로 함수를 받을 수 있다.
function foo(f) {
  return f()
}
foo(function(){return 10})

function poo() {
  return 10;
}
foo(poo)
```



**addMaker 함수를 만들어 보자**

```javascript
const addMaker = (a) => (b) => a + b; 
/* 위와 동일한 함수
function addMaker (a) {
  return function(b){
    return a + b;
  }
} 
*/
const add10 = addMaker(10) 
add10(5) // 15
```

```text
const add10 이라는 변수에 addMaker(10)을 담는다.
add10은 
return function(b){
	return a + b;
}
익명함수를 리턴하고 있기때문에 add10값은 함수이다.
return function(b) {
	return 10 + b
}
```

- 일급 함수, 순수함수, 클로저
- 평가 시점이 언제든 상관없다.



```javascript
// 잘 쓰이진 않지만 함수형 프로그래밍의 일급 함수를 말해주는 예제
const func = (f1,f2,f3) => {
	return f3(f1() + f2())
}
// 실행
func(
  function(){return 10},
  function(){return 5},
  function(a){return a * a}
    )
```

