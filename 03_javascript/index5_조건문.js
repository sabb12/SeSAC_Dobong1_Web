let log = console.log;
// /* 1. if 문*/
// /* if(조건식){ 조건이 참일 때 실행할 문장 }*/

// if (5 > 3) {
//   log("5가 3보다 커요");
// }

// if (5 > 3) log("5가 3보다 커요");

// let number = prompt("숫자 입력");
// number = Number(number);
// log(number);

// /* if ~ else*/
// if (number > 10) {
//   log("10보다 작아요");
// } else {
//   alert("10보다 작거나 같아요");
// }

// let number = 88;
// /* if ~ else if ~ else*/
// if (number > 10) {
//   log("10보다 큽니다");
// } else if (number === 10) {
//   log("10입니다");
// } else {
//   alert("10보다 작습니다");
// }

//실습
// let 성인 = 20;
// let 고등학생 = 17;
// let 중학생 = 14;
// let 초등학생 = 8;
// let 유아 = 8;
// let age = prompt("age 입력");

// if (age >= 20) {
//   log("성인");
// } else if (age >= 17) {
//   log("고등학생");
// } else if (age >= 14) {
//   log("중학생");
// } else if (age >= 8) {
//   log("초등학생");
// } else {
//   log("유아");
// }

/* 2. switch-else문 
      - switch의 괄호안과 case의 조건에는 비교식이 들어가지 않음, 값 자체가 들어감
      - 자바스크립트에선 조건이 많을 때 switch를 쓰는게 근소하게 성능에 유리함
*/
// let a = 4;
// switch (a) {
//   case 3:
//     log("3 입니다");
//     break;
//   case 4:
//     log("4입니다");
//   // break;
//   // break를 써주지 않으면, case 4를 출력하고 싶을 때,
//   // case 5까지 모두 실행됨(스코프{중괄호}에서 빠져나가지 못함)
//   case 5:
//     log("5입니다");
//     break;
//   default:
//     log("어떤 값인지 모르겠어요");
//     break;
// }

// let score = 100;
/*
  if문으로
  90 <= A <= 100
  80 <= B <90
  70 <= C <80
  60 <= C <70
  F <60
*/
// if (score > 100 || score < 0) {
//   log("잘못된 점수입니다.");
// } else if (score >= 90) {
//   log("A");
// } else if (score >= 80) {
//   log("B");
// } else if (score >= 70) {
//   log("C");
// } else if (score >= 60) {
//   log("D");
// } else {
//   log("F");
// }

// 무조건 0 ~ 100까지만 들어옵니다
// score / 10: score를 10으로 나눈 결과의 몫으로만 판별
// let score = 74;
// let score1 = parent(score / 10);
// switch (parseInt(score / 10)) {
//   case 10:
//     log("A");
//     break;
//   case 9:
//     log("B");
//     break;
//   case 8:
//     log("C");
//     break;
//   case 7:
//     log("D");
//     break;
//   case 6:
//     log("E");
//     break;
//   default:
//     log("F");
//     break;
// }

/*삼항연산자*/
// 조건식 ? 조건식이 true일 때: 조건식이 false일 때
// let num = 5;
// if (num % 2 === 1) {
//   log("홀수");
// } else {
//   log("짝수");
// }

// num % 2 == 1 ? log("홀수") : log("짝수");

// new Date().getHours() <= 12 ? log("오전") : log("오후");
