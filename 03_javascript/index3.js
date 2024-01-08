/*
    var
     - 재할당, 재선언 모두 가능
     - 재선언: 바람직하지 않음(중복선언)
*/

var name = "홍길동";
var name = "홍길동2";
console.log(name);

/*
    let
     - 재선언: 불가능
     - 재할당, 가능
     - 초기화 작업 필요 없음(최초 선언시 값 할당 하지 않아도 됨)
*/

let c;
c = 10; // 재할당
// let c; << 중복 선언 불가
// let c; // index3.js:20 Uncaught SyntaxError: Identifier 'c' has already been declared (at index3.js:20:5)
console.log(c);

/*
    const 
      - 재선언, 재할당 모두 불가
      - 변하지 않는 값을 변수에 저장할 때 사용
      - 최초 선언시 반드시 값 할당(초기화)

 */
// const b; 초기화 해야함!!
const b = 10;
// b = 11; // 재할당 불가: Uncaught TypeError: Assignment to constant variable. at index3.js:33:3

let q1 = 3;
// q1 - 3; // 3
q1 = q1 - 3; // 0
console.log(q1);

// 대입 연산자 a = 0

// 비교 연산자
// (참고) = 은 대입연산자
/* 1. == (값만 비교하는 연산자) */
console.log("== 연산자");
console.log(1 == 1);
console.log(1 == 2);
console.log(1 != 2);
console.log(1 != 1);
console.log("1" == 1);

// js의 이상한 점..
console.log("" == "0"); // false
console.log(false == "0"); // true
console.log("0" == 0); // true
console.log("" == 0); // true
console.log(undefined == null); // true

/* 2. 비교연산자 === (값과 data type까지 비교) */
console.log("" === "연산자"); // false
console.log("1" === 1); // false
console.log(undefined === null); // false
console.log("" === "0"); // false
console.log(1 === 1); // true

// 크기 비교
console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 <= 0); // false

console.log("--------산술 연산자-------");
console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(7 / 2);
console.log(7 % 2);
console.log(7 ** 2); // 7 * 7 = 47

// 논리 연산자
console.log("--------논리 연산자-------");
console.log(!true); // false
console.log(!!true); // true
console.log(!!false); // false
console.log(true && true); // true
console.log(true && false); // true
// && (AND 연산자는 false일 확률이 높은 조건을 앞쪽에 배치)
console.log(true && true && true && true && false); // &&는 false를 만나야 끝난다
console.log(false && true && true && true && false); // true

// || (OR 연산자는 true일 확률이 높은 조건을 앞쪽에 배치)
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

console.log(!(2 > 1)); // false
console.log(2 > 1 && -2 < 1); // true
console.log((2 > 1 && -2 < 1) || 2 > 5); // true

// 문자와 변수를 같이 쓰는 방법
const str1 = "allie";
const str2 = "서울";
// allie는 서울에 삽니다
/* 1. + 연산자 이용 (문자열일 때는 문자열을 이어줌 */
console.log(str1 + "는 " + str2 + "에 삽니다.");
console.log(str1, "는 ", str2, "에 삽니다."); // 이렇게 쓰면 콤마 "," 사이에 뛰어 쓰기가 생긴다
console.log(`${str1}는 ${str2}에 삽니다.`);

const str3 = `${str1}는 ${str2}에 삽니다.`;
const str4 = str1 + "는 " + str2 + "에 삽니다.";
console.log(str3);
console.log(str4);
