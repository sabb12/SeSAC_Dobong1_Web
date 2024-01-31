function call() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("kim");
      resolve("여기는 callback hell");
    }, 1000);
  });
}

function back() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("back");
      resolve("back 을 실행했구나");
    }, 1000);
  });
}

function hell() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("여기는 callback hell");
    }, 1000);
  });
}

async function execute() {
  const calling = await call();
  console.log(calling);
  const backing = await back();
  console.log(backing);
  const helling = await hell();
  console.log(helling);
}

execute();

// call("kim")
//   .then((name) => {
//     console.log(name + "반가워요");
//     return back();
//   })
//   .then((text) => {
//     console.log(text);
//     return hell();
//   })
//   .then((word) => {
//     console.log(word);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

async function execute() {
  const calling = await call();
  console.log(calling);
  const backing = await back();
  console.log(backing);
  const helling = await hell();
  console.log(helling);
}

execute();
