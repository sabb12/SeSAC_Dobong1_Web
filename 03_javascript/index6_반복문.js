let log = console.log;

/* 1. for문 */
/*
    for(변수 선언과 초기값 할당; 조건식(어디까지 증가? 감소?); 증감식){
        반복할 코드;
    }
*/

// for (let i = 0; i < 10; i++) {
//   log("안녕: ", i);
// }

// for (let i = 0; i < 10; i += 2) {
//   log(`안녕하세요 ${i}`);
// }

// for (let i = 1; i <= 5; i++) {
//   log(i);
// }

// for (let i = 1; i < 6; i++) {
//   log(i);
// }

// for (let i = 0; i < 5; i++) {
//   log(i + 1);
// }

// // 감소
// for (let i = 5; i > 0; i--) {
//   log(i);
// }

// // 1부터 n까지의 덧셈
// let n = 0;
// for (let i = 1; i < 11; i++) {
//   log((n += i));
// }

// /* 배열과 함께 사용하는 for문*/
// let fruits = ["사과", "망고", "오렌지", "망고스틴"];
// log(fruits.length);

// for (let i = 0; i < fruits.length; i++) {
//   log(fruits[i - 1]);
// }

// let numsArr = [99, 99, 98, 85, 77];
// let sum = 0;
// for (let i = 0; i < numsArr.length; i++) {
//   log((sum += numsArr[i]));
// }

// /* 2. while문 */
// /*
//     추가화식;
//     while(조건식){
//         조건이 참일 때 실행할 문장;
//         증감식;
//     }
// */

// let n2 = 1; // while의 초기화 식
// while (n2 <= 5) {
//   // 조건식
//   log(n2); // 실행문
//   n2++; // 증감식
// }

// log("-----------------------------------------");
// n2 = 10;
// while (n2 > 4) {
//   log(n2);
//   n2--;
// }

// // 1 ~ 10 짝수만 출력 > while문 이용
// n2 = 1;
// while (n2 <= 10) {
//   if (n2 % 2 === 0) {
//     log(n2);
//   }
//   n2++;
// }

// // 10부터 1까지 감소하는데 홀수만 출력
// n2 = 10;
// while (n2 >= 1) {
//   if (n2 % 2 === 1) {
//     log(n2);
//   }
//   n2--;
// }

// log("=======================");
// let b = 0;
// while (true) {
//   log(b);
//   b++;
//   if (b > 10) break;
// }

// log("=======================");
// let sum3 = 0;
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue;
//   // i % 2 === 0 일 때 반복하지 안혹 다음 박복으로 넘김

//   sum3 += i;
// }
// log(sum3);

// let n3 = 0;
// while (confirm("계속 진행할까요?")) {
//   n3++;
//   alert(`${n3}번째 alert창`);
// }

// let container = document.querySelector(".container");

// container.innerHTML = `<button class="button">hi</button>`;

let num123 = prompt("숫자 입력");
for (let i = 0; i < num123; i++) {
  if (i % 13 && i % 2 === 1) {
    log(i);
  }
}

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    log(i + " * " + j + " = " + i * j);
  }
}

let a = Number(prompt("0 ~100"));
let result = 0;
while (a <= 100) {
  if (a % 5 === 0 || a % 2 === 0) {
    result += a;
    console.log(result);
  }
  a++;
}
