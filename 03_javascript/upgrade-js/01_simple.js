/* 구조 분해 할당*/
/* 1. 배열의 구조분해 할당 */

const arr1 = ["tomato", "kiwi", "banana"];
const [tomato, kiwi, banana] = arr1;

// console.log("arr5: ", arr5[2]);
console.log("tomato: ", tomato);

const arr2 = ["빨", "주", "노", "초"];
const [red, orange, green] = arr2;
console.log(red, green);

// 수선 x와 y data exchange
let x = "first";
let y = "second";
[x, y] = [y, x];

console.log(x, y);

//원래는 이렇게 data exchange한다
let x2 = "first";
let y2 = "second";
let tem;
temp = x2;
x2 = y2;
y2 = temp;

/* 2. 객체의 구조분해 할당 */
const obj = {
  title: "제목",
  content: "내용",
  number: 0,
};

console.log(obj.title);

// "."으로 사용하기 싫을때
// 순서는 상관 없다
// const {number, content, title} = obj;
// const { title, content, number } = obj;
// console.log(number);

// key 이름이 너무 긴거 같아서 짧게 쓰는 방법
const { title: t2, content, number } = obj;
console.log("t2: ", t2);

/* 전개구문 ...*/
// ...연산자
const array3 = [1, 2, 3];
const array4 = ["a", "b", "c"];

for (let arr of array3) {
  console.log("arr: ", arr);
}
console.log("...array3: ", ...array3);

// concat method 대신 사용해도 된다
const array5 = array3.concat(array4);
const array6 = [...array3, ...array4];
console.log("array5: ", array5);
console.log("array6: ", array6);

const str = "leo";
let strToArr = [...str];
let strToArr2 = str.split("");
console.log("strToArr: ", strToArr);
console.log("strToArr2: ", strToArr2);

// object spread 합치기;
const me1 = {
  name: "allie",
  height: 163,
  friend: null,
  married: false,
};

const me2 = {
  name: "진형",
  like: ["코딩하기", "놀러가기"],
  greeting: function () {
    console.log(
      `안녕하세요, 제 이름은 ${this.name}이고요, 키는${this.height}입니다`
    );
  },
};

let me = { ...me1, ...me2 };
//같은 key이름이 있을 때 뒤에 있는 key이름이 들어간다
console.log("me: ", me);
me.greeting();

// rest

const obj2 = {
  title: "제목",
  content: "내용",
  num: 0,
  key4: "value4",
  key5: "value5",
};

// ...obj3은 새로운 obj 형태로 만들어 준거다
// const { title: a, content: b, num: c, ...obj3 } = obj2;
// console.log("obj3: ", obj3);

function test(...valuue) {
  console.log(...valuue);
  const [a, b, ...rest] = valuue;
  console.log(a);
  console.log(b);
  console.log(rest);
}

// test(1, 2, 3, 4, 5, 6);

// 매개변수가 몇개가 들어오든 합산해주는 함수 addNumber()

function addNumber(...rest) {
  let sum = 0;
  rest.forEach((num) => {
    sum += num;
  });
  return sum;
}

let result1 = addNumber(1, 2, 3, 4, 5, 6, 7);
console.log(result1);
