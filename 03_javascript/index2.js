// 1. string(문자열)
/*
    - 텍스트 정보
    - 숫자, 특수문자 도 따움표 안에 따옴표 있으면 문자열
    - 따옴표 아넹 따옴표가 있다면..?
       - "안에 '작은 따옴표'가 있어요"
       - '안에 "큰 따옴표"가 있어요'
*/

let myName = "leo";
let number1 = "128";
console.log(myName + " " + number1);

// 2. number(숫자)
let number2 = 128;
let opacity = 0.7;
console.log(number2, opacity);

// NaN(not a number)
console.log("apple" - 3);

// 3. boolean
// true 나 false
let checked = true;
let isShow = false;
console.log(checked, isShow);

// 4. undefined 와 null;
// 값도 없고 타입도 지정되어 있지 않은 상태
let undef;
console.log(undef);

let empty = null;
console.log(empty);

// 5. array(배열)
let fruits = ["orange", "pineapple", "strawberry"];
console.log(fruits[2]);
console.log(fruits[0]);

let data = [22, "22", false];
console.log(data[0]);
console.log(data[1]);

// 2차원 배열
const korean = [
  ["가", "나", "다"],
  ["라", "마", "바"],
  ["사", "아", "차"],
];

console.log(korean[0]); // 배열 ["가", "나", "다"]
console.log(korean[0][1]); // '나'

// Quiz
const letters = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];

console.log(
  letters[3][0] + letters[1][3] + letters[0][1] + letters[0][3] + letters[2][2]
);

// 3차원 배월
const nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

console.log(nums[1][0][1]);

// 6. object
/* 
   {}
   배열은 순서가 있는 반면, object는 키-값 형태로 저장
   데이터에 접근 시 key이름을  이용해서 접근
   {키이름: val1, 키이름:val2}
*/

let cat = {
  name: "나비",
  age: 2,
  isCute: true,
  mew: function () {
    return "냐옹";
  },
};

// 점 표기법
console.log(cat.name, cat.mew());
cat.like = "tuna";
cat.age = 3;
console.log(cat);

// 대괄호 표기법
let dog = {
  name: "coco",
  isPoodle: true,
  age: 3,
  sibling: ["max", "lucy"],
};

console.log(dog.name);
console.log(dog["name"]);
console.log(dog["age"]);
console.log(dog["sibling"][1]);

let introduction = {
  name: "leo",
  age: 34,
  nationality: "Republic of Korea",
};

// typeof null 과 boolean는 object로 결과가 나온다

// let mathScore = prompt("수학 점수를 입력 하세요"); // '50'
// let engScore = prompt("영어 점수를 입력 하세요"); // '50'
// let mathNumber = Number(mathScore) // 50
// let mathNumber = (mathScore + engScore) / 2; //'5050' / 2
// let avg = (Number(mathScore) + Number(engScore)) / 2; //'5050' / 2
// console.log(avg);

// console.log(typeof "문자"); // string
// console.log(typeof mathScore); //string = 숫자를 입력하던, 입력된 모든 것은 string으로 입력 된다
// console.log(typeof mathNumber); // number
// console.log(typeof true); // boolean
// console.log(typeof []); // object
// console.log(typeof NaN); // number
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined

// 형변환
// 1. ? >> string으로 변경 하는 법
console.log("---------------");

let str1 = true; // boolean
let str2 = 123; // number
let str3 = null; // null

console.log(String(str1));
console.log(String(str2));
console.log(String(str3));
console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str3));

// 2. ? >> number로 변경 하는 법
let n1 = true; // true -> 1
let n2 = false; // false -> 0
let n3 = 123; // true -> 123
let n4 = "123.9"; //true ->123.9
true;

console.log(Number(n1));
console.log(Number(n2));
console.log(Number(n3));
console.log(typeof Number(n4));
console.log(parseInt(n4)); // 123, 소수점은 버리고 정수형으로 변경

// 실습
console.log(typeof 10 + " " + "isn't" + " " + typeof "" + " " + "data type.");
console.log(
  "typeof를 array이나 null에 사용하면," +
    " " +
    typeof null +
    " " +
    "결과를 얻을 수 있습니다"
);

let mathScore = "77";
let engScore = "88";
let avgScore = (Number(mathScore) + Number(engScore)) / 2;
console.log(avgScore);
