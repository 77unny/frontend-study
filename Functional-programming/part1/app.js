// 순수함수 : add 함수
const add = (a, b) => a + b;
console.log('add()', add(10, 5)); //15
console.log('add()', add(10, 5)); //15
console.log('add()', add(15, 5)); //20

// 순수하지 않는 함수 : 외부의 영향을 받는 함수
let c = 10;
const add2 = (a, b) => a + b + c;
console.log('add2()',add2(10, 5)); //25
c = 5;
console.log('add2()',add2(10, 5)); //20

// 순수 함수 : 외부 영향을 받지만 상수로 선언된 경우
const NUM = 10;
const add3 = (a, b) => a + b + NUM;
console.log('add3()',add3(10, 5)); // 25
console.log('add3()',add3(10, 5)); //25

// 순수하지 않는 함수 : 인자 값을 변경하는 함수
let obj1 = { val: 10 };
const add4 = (obj, b) => {
  obj.val + b;
};
console.log('add4()',add4(obj1, 5)); // return 값이 없다. undefind
console.log('obj1', obj1.val); // add4에서 5값이 더한 값으로 변경

// 순수 함수 : 새로운 값으로 반환
let obj2 = { val: 10 };
const add5 = (obj, b) => {
  return {val: obj.val + b}
};
console.log('add5()',add5(obj2, 5).val); 
console.log('obj2',obj2.val);