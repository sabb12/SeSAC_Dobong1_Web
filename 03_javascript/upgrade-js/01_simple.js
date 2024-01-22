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
