// 모듈을 불러서 사용

// 가지고 오고 싶은 함수/변수만 구조분해할당 이용해서 가져올 수 있음
const { sayName } = require("./03_export1"); // 가지고 오고싶은 것만 하는 방법

// 한 번에 가져오기 (객체로 불러옴)
const export1 = require("./03_export1");
sayName("allie");

console.log("export1: ", export1);
export1.sayName("allie");

const { sayHi2, sayHi3 } = require("./03_export2");
sayHi2();
sayHi3("안녕하세요");
