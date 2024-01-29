// must be 큰 다움표 ""
// boolean, 숫자, []배열, 는 다움표 있으면 안된다
const obj = `{
    "model": "아이오닉",
    "price":50000000,
    "isElectric":true,
    "option":["사이드라마", "스마트 스크린"]
}`;

// JSON.parse(실제 제이슨 데이터) : json > object
const carInfo = JSON.parse(obj);
console.log(obj);
console.log(typeof obj);
console.log(obj.model); // undefined
console.log("-----------------------------");
console.log(carInfo);
console.log(typeof carInfo);
console.log(carInfo.model);

// JSON.stringify(객체) : object > json
console.log("--------JSON---------");
const carJSON1 = JSON.stringify(carInfo);
console.log("carJSON1: ", carJSON1);
const carJSON2 = JSON.stringify(carInfo, null, 5);
console.log("carJSON2: ", carJSON2);
console.log("carJSON2.model: ", carJSON2.model); // string 이기 때문에 undefined이다
