let log = console.log;

//문자열에서 사용 가능한 속성/메소드
/*
    - length
    - toUpperCase, trim, indexOf
    - slice, replace, replaceAll, repeat, split
*/
let str1 = "Strawbery Moon";
let str2 = "   Strawbery Moon  ";

//문자열 인덱스
log(str1[2]);
log(str1[2] + str1[4] + str1[8]);
log(str1.length);
log("str1 문자열 길이: ", str1.length);
log("str2 문자열 길이: ", str2.length);

let msg = "Happy Birthday~";
let userId = "    user123    ";

log(msg.toLowerCase());
log(msg.toUpperCase());
log(str2.trim().length);
log(userId.trim());

// indexOf
let mango = "applemango";
log(mango.indexOf("apple")); // 0
log(mango.indexOf("mango")); // 5
log(mango.indexOf("e")); // 4
log(mango.indexOf("x")); // -1 없을 때 return 값은 -1이다
// 문자열에  포함되지 않은 문자열이 매개변수로 들어가면 -1 반환

// slice
// slice 해도 실제 문자열은 변하지 않음
log(mango.slice(5)); // mango
log(mango.slice(3, 6)); // lem
log(mango.slice(-1)); // 0
log(mango.slice(-4)); // ango

let msg2 = "Wow~ It is so amazing!";
log(msg2.replace("Wow", "Hey"));
log(msg2.replaceAll("o", "O"));

let date = "2024.1.10";
//2024-1-10
log(date.replaceAll(".", "-"));
// data = date.replaceAll(".", "-"); // 실전에서 변경 할려면 변수에 다시 담아야된다

log("abcs".repeat(10));

log(date.split(""));

log("------------배열-------------");

// 배열 관련 메소드
/*
- length(속성)
- push, pop, unshift, indexOf join, reverse
- includes, map, forEach, find, filter
- for ~ of(함수 아님)
*/

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["quakka", "puppy", "rabbit", "hamster"];

arr1[5] = 6;
arr1[7] = 7; // 이렇게 하면 empty가 생겨서 안좋은 방법 push로 하는게 좋음
log(arr1);

arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
arr1.push(7);
arr1.push(10);
log(arr1);
arr1.pop();
arr1.pop();
arr1.pop();
log(arr1);

arr2.unshift("cat");
log(arr2);
arr2.shift();
log(arr2);

log("-------------------------");
/* includes(매개변수 한개 - 배열의 요소가 들어감)
- 매개변수로 들어간 요소가 배열에 있으면, tru, 없으면 false
*/
log(arr2.includes("cat"));
log(arr2.includes("quakka"));

log("-------------------------");
/* indexOf - 문자열의 indexOf와 동일
- 몇 번 인덱스인지 확인 후 인덱스값 반환
*/

log(arr2.indexOf("quakka"));
/* reverse - 배열의 순서를 뒤집어줌
- 실제 배열이 변경
*/
arr1.reverse();
log(arr1);

/*  join - 문자열의 split 메소드와 반대
- 배열을 문자열로 변겨
*/

let str123 = "Strawbery Moon";
str123 = str123.split("");
log(str123);
str123 = str123.join("+");
log(str123);

/*반복문 - for of & forEach */
let arr3 = [5, 6, 7, 8, 9];
let alphabets = ["a", "b", "c", "d", "e", "f"];
for (let i = 0; i < arr3.length; i++) {
  log(arr3[i]);
}

log("-----------for of--------------");
// number가 arr3의 요소다
//보통 이렇게 쓴다 for (let product of productList)
for (let number of arr3) {
  log(number);
}

log("------------forEach-------------");
// forEach
/*
배열.forEach(function(element, index, array){})
*/
arr3.forEach((element, i, array) => {
  log(element, i, array);
});

log("------------forEach-------------");
// filter
// return 이후 조건을 만족하는 요소들을 모아서 배열로 반환
// 1. 함수표현식
let arr21 = ["quakka", "puppy", "rabbit", "hamster"];
let six = arr21.filter(function (arr) {
  return arr.length === 6;
});

// 2. 화살표 함수 & return 있는 ver.
let six2 = arr21.filter((arr) => {
  return arr.length === 6;
});

// 3. 화살표 함수 & return 없는 ver. (중괄호 없어야 성립)
let six3 = arr21.filter((arr) => arr.length === 6);

log(arr21);
log(six);
log(six2);
log(six3);

log("------------map-------------");
// map
// 배열 내의 모든 요소에 대해 함수 호출한 결과를 모아서 새로운 배열로 반환
let arr4 = [1, 2, 3, 4, 5];
let multiArr = arr4.map(function (element) {
  return element * 3;
});

log(multiArr);

log("------------find-------------");
// find
// 배열에서 특정 조건을 만족하는 첫번째 "요소" 반환
let findResult = multiArr.find(function (element) {
  return element > 10;
});
log(findResult);

let result = [];

for (let i = 1; i <= 100; i++) {
  result.push(i);
}

log(result);

// 1. For문
let sumFor = 0;
for (let i = 0; i < result.length; i++) {
  log(("for: ", (sumFor += result[i])));
}

// 2. For of문
let sumFor2 = 0;
for (let sumFo of result) {
  log(("for of: ", (sumFor2 += sumFo)));
}

// 2. forEach문
let sumFor3 = 0;
let result1 = result.forEach(function (element) {
  return (sumFor3 += element);
});
log("sumFor3: ", sumFor3);

let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

let sameArray = fruits1.filter(function (element) {
  return fruits2.includes(element);
});
log("sameArray: ", sameArray);

let differentArray = fruits1.filter(function (element) {
  return !fruits2.includes(element);
});
log("differentArray: ", differentArray);
