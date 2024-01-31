let product;
let price;

function goMart() {
  console.log("마트에 들어가서 어떤 음료를 살지 고민..");
}

function pickDrink() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("고민 끝~~");
      product = "콜라";
      price = 2000;
      //   resolve("구매완료!!");
      resolve("성공");
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

async function execute() {
  goMart();
  // awit 다음 줄 기다려 주세요 라는 뜻
  await pickDrink();
  pay();
}

execute();
