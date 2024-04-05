function printSome<T>(x: T, y: T) {
  console.log(x);
  console.log(y);
  return y;
}

console.log(printSome<number>(1, 2));
console.log(printSome<string>("hi", "hello"));

function printSome2<T, K>(x: T, y: K): void {
  console.log(x);
  console.log(y);
}

console.log(printSome2<number, string>(1, "안녕하세요"));

function arrLength(arr: any[]): number {
  return arr.length;
}

function getValue1(value: any): any {
  return value;
}

// generic으로 만들어보기
function arrlength2<T>(arr: T[]): number {
  return arr.length;
}
function getValue2<T>(value: T): T {
  return value;
}

console.log(arrlength2<number>([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(getValue2<number[]>([1, 2, 3, 4, 5, 6, 7, 8]));

// Generic 실습
function arrElement<T>(arr: T[], num: number): T | boolean {
  return num > arr.length ? true : false;
}

console.log(arrElement<string>(["1"], 1));

// #### interface & generic
interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}

// T 타입으로 string을 사용
const iphone15: Phone<string> = {
  company: "삼성",
  createAt: new Date("2023-10-13"),
  option: "black",
};

// T 타입으로 객체타입 적용
type iphoneOption = {
  color: string;
  storage: number;
};

const iphone16: Phone<iphoneOption> = {
  company: "삼성",
  createAt: new Date("2024-10-06"),
  option: {
    color: "silver",
    storage: 256,
  },
};

console.log("---------------");
console.log(iphone15);
console.log(iphone16);

// 타입스크립트는 초기화돤 값을 바탕으로 타입을 자동추론함
let aa = 1;
let bb = "string";
let cc = true;

// aa = "안녕하세요"; // 불가능 (aa가 number형으로 자동추론됨)


