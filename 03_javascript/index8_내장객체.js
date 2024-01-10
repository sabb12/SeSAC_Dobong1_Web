let log = console.log;

/*date 객체*/
// 현재 시간, 날짜에 대한 정보를 얻기 위해 사용
// 원하는 겂으로 초기화 가능
let now = new Date();
log(now);
// new Date("날짜 문자열");
log(new Date("September 30, 2000 13:00:00"));
log(now.getFullYear(), "년");
log(now.getMonth(), "월"); //월: 0 ~ 11
log(now.getDate(), "일"); //며칠?
log(now.getHours(), "시"); //시간(0~23)
log(now.getMinutes(), "분"); //분(0~59)
log(now.getSeconds(), "초"); //초(0~60)
log(now.getMilliseconds(), "밀리초"); //밀리초(0~1000) =? 1000 = 1초
log(now.getDay(), "요일"); // (0 ~ 6): 0이 일요일, 1이 월요일

log("------------");
/*Math 객체*/
log(Math.PI); // 파이
log(Math.E); // 자연로그 e
log(Math.SQRT2); // 루트2

log("------------");
//메소드
log(Math.min(1, 2, 3, 4, 5, -5, -5.3));
log(Math.max(1, 2, 3, 4, 5, -9, -0.3));
log(Math.ceil(5.155)); // 올림
log(Math.floor(-5.155)); // 내림
log(Math.round(5.4)); // 반올림
log(Math.random()); // 0 <= x < 1
log(Math.random() * 3); // 0 <= x < 3
log(Math.floor(Math.random() * 3)); // 0 <= x < 3

// 0 <= x < 45
// 1 <= x < 46
log(Math.floor(Math.random() * 45) + 1); // 0 <= x < 3

log("------------");
// object 관련 객체
const areaNum = {
  Seoul: "02",
  Incheon: "032",
  Busan: "051",
  Ulsan: "052",
  Gwangju: "062",
  Jeju: "064",
};

// 잘 안쓴다
const obj = new Object({
  a: "10",
  b: "55",
});
log(obj);

// 각각 key와 value를 뽑아서 배열로 반환하는 객체의 메소드
const area = Object.keys(areaNum);
log(area);
const nu = Object.values(areaNum);
log(nu);

let rightnow = new Date();

if (rightnow === 6 && rightnow === 0) {
  log("주말");
} else {
  log("평일");
}

log(Math.floor(Math.random() * 11));
