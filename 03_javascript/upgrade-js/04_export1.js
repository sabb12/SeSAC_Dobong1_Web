// 모듈만들기 export 이용

// 한번에 내보내기
const flowers = ["rose", "sunflower", "tulip"];
function getFlowers(idx) {
  if (idx > flowers.length || idx < 0) return "x";
  return flowers[idx];
}

export { flowers as flr, getFlowers as getFlr };
// 다른 이름으로 내보낼 수 도 있다 "as" flr 하면
// export { flowers as flr, getFlowers as getFlr };
