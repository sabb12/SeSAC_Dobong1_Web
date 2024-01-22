// class : 오브젝트를 만들 수 있는 틀;
/*
    속성
     - 만들어진 연도 year
     - 집의 이름 name
     - 창문의 갯수 window
    메소드
     - 건물의 나이 출력 getAge()
     - 창문의 개수 출력 getWindow()
*/

class House {
  constructor(year, name, window) {
    this.year = year;
    this.name = name;
    this.window = window;
  }

  //메소드
  getAge() {
    console.log(`${this.name}은 건축한지 ${2024 - this.year}`);
  }

  getWindow() {
    console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
  }
}

// const h1 = {
//   name: "old",
//   year: 1789,
//   window: 1,
//   함수 ~~~
// };
// 위에 h1이랑 아래 new House는 같은 것이다.
// const house1 = new House(1789, "old", 1);
// house1.getAge();
// house1.getWindow();

// const house2 = new House(2015, "자이", 10);
// house2.getAge();
// house2.getWindow();

// console.log("----------- 상속 ----------");

// class Apartment extends House {
//   constructor(year, name, window, floor, windowMaker) {
//       super(year, name, window) {

//           this.floor = floor;
//           this.windowMaker = windowMaker;
//       }
//   }

//   getAptInfo() {
//     return `${this.year}년에 지어진 ${this.name}.
//     총 층수는 ${this.floor}, 창문의 갯수는 ${this.window}`;
//   }

//   //overriding
//   // 부모 클래스의 메소드를 이름을 똑같이 쓰고 싶지만 내용은 다르게 만들고 싶을 때, 메소드 재선언
//   getWindow() {
//     return `${this.name}의 창문은 ${this.windowMaker}에서 만들었고, ${this.window}개 입니다.`;
//   }

//   // getAge() << 상속받아서 사용 가능
// }

// console.log("*********************");

// const apt1 = new Apartment(2022, "raemian", 19, 50, "KCC");
// console.log(apt1.getWindow()); // 오버라이딩 함수, 메소드 재정의
// console.log(apt1.getAptInfo()); // 새로운 메소드 정의
// apt1.getAge(); // 부모 메소드 그대로 상속
// console.log(apt1);

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

let rect1 = new Shape(3, 4);
console.log(rect1.getArea());
