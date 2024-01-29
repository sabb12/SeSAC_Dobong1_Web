// express 불러준다
const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

// views 파일들은 여기에 있어요
app.set("views", "./views");

// post 쓸때 꼭 필요한 것. 안그러면 깨져서 나옴
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  // views파일에 "index"는 index.ejs 파일이다
  res.render("index");
});

// 1. ajax GET 라우팅
app.get("/ajax", (req, res) => {
  console.log(req.query);
  //   res.send(req.query); 이거나 아래 나 같은 것이다
  res.send({
    name: req.query.name,
    gender: req.query.gender,
  });
});

// 1. ajax POST 라우팅
app.post("/ajax", (req, res) => {
  console.log(req.body);
  //   res.send(req.query); 이거나 아래 나 같은 것이다
  res.send({
    name: req.body.name,
    gender: req.body.gender,
  });
});

// 2. axios GET 라우팅
app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// 2. axios POST 라우팅
app.post("/axios", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 3. fetch GET 라우팅 without async
app.get("/fetch", function (req, res) {
  console.log(req.query);
  // 1. 방법
  //   res.send("fetch 응답 완료!");
  // 2. 방법
  res.send(req.query);
});

// 3. fetch POST 라우팅
app.post("/fetch", function (req, res) {
  console.log(req.body);
  // 1. 방법
  //   res.send("fetch 응답 완료!");
  // 2. 방법
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
