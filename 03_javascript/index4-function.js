/*
    함수
     - 어떤 작업을 수행하기 위해 "독립적으로 설계된 코드의 집합"
     - 함수를 정의(선언) 하고 호출(사용)
     - 중합을 줄일 수 있다
     - 선언방식 3가지
        - 함수 선언문
            - 선언후 어디에서나 사용 가능
        - 함수 표현식
            - 선언 이후에만 사용 가능
        - 화살표 함수
            - 화살표 함수와 함수표현식은 변수에 익명함수를 담아둔 모양
            - 화살표 함수와 함수 표현식은 동일함(모양만 다름)
*/

// 1. 함수 선언문
helloWorld1();

function helloWorld1() {
  console.log("hello world 1!!");
}
helloWorld1();
helloWorld1();
helloWorld1();

// 2. 함수 표현식
// helloWorld2(); // index4-function.js:27 Uncaught ReferenceError: Cannot access 'helloWorld2' before initialization at index4-function.js:27:1
const helloWorld2 = function () {
  console.log("hello world 2!!");
};

helloWorld2();
helloWorld2();
helloWorld2();

// 3. 화살표 함수
// helloWorld3(); // index4-function.js:37 Uncaught ReferenceError: Cannot access 'helloWorld3' before initialization at index4-function.js:37:1
const helloWorld3 = () => {
  console.log("hello world 3!!");
};

helloWorld3();
helloWorld3();
helloWorld3();

// 함수에 인자(parameter) 전달
function add(num1, num2) {
  //   num1 + num2;
  console.log(num1 + num2);
}

add(1, 2);
// add 함수에 값이 저장이 안된다 그래서 콘솔에 찍으면 undefine다 나온다
console.log("add(1, 1): ", add(1, 1));

// return 하면 add1에 값을 가지고 있을 것이다
/*
    return
     - 반환 값으로 함수 내부 코드의 '최종 결과값'을 가지고 있는것
     - console.log 등으로 출력하는데 그치지 않고
       값을 저장하고 보관하기 위한 키워드
     - return을 만나면 함수 실행 중단
*/
const add1 = function (num1, num2) {
  console.log("리턴 전에는 잘 실행돼요");
  return num1 + num2;
  console.log("리턴 이후에는 실행되지 않아요");
};

console.log(add1(3, 5));
const result1 = add1(3, 5);
const result2 = add1(3, 2);
console.log(result1);
console.log(result2);

console.log("==============================");

const sayHello = function (text) {
  return text;
};

sayHello("allie"); // 콘솔에 안나옴
console.log(sayHello("allie"));

function sayHello2(text, name) {
  return `${text} ${name}`;
}

console.log(sayHello2("hi", "allie"));

// 함수 표현식(sayHello3), 화살표 함수(sayHello4)
const sayHello3 = function (text, name) {
  return `${text} ${name}`;
};

console.log(sayHello3("hi", "lee"));

const sayHello4 = (text, name) => {
  return `${text} ${name}`;
};

console.log(sayHello4("hi", "leo"));

function multifly(num1, num2) {
  return num1 * num2;
}

multifly(3, 7);
console.log(multifly(3, 7));
console.log(multifly(2, 2));

const square = function (num) {
  return num ** 2;
};

console.log(square(4));
console.log(square(11));
console.log(square(5));
