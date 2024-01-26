const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

// POST 사용 할 때: body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/getForm", function (req, res) {
  console.log("req", req.query);
  //   res.send("데이터 잘 받았습니다.");
  res.render("result", {
    title: "GET",
    userInfo: req.query, // 생김샘 {id: "", email: "", password: ""}
  });
  // res.render("뷰", {보내줄 데이터})
});

// POST
app.post("/postForm", function (req, res) {
  console.log(req.body);
  //   res.send("포스트 요청 성공!~~");
  //   res.send(`
  //     <ul>
  //     <li>${req.body.id2}</li>
  //     <li>${req.body.pw2}</li>
  //     </ul>
  //   `);

  // result or result.ejs both able
  console.log("안녕하세요~~");
  res.render("result.ejs", {
    title: "POST",
    userInfo: req.body, // 생김샘 {id2: "", pd2: "", agree:[]}
  });
});

// practice: 실습문제
/*
    /practice1
    /practice2

*/

app.get("/practices1", function (req, res) {
  res.render("practice/practices1"); // /practices1 똑같이 않아도 되고 practices1.ejs도 된다
});

app.get("/practices2", function (req, res) {
  res.render("practice/practices2"); // /practices1 똑같이 않아도 되고 practices1.ejs도 된다
});

app.get("/practice", (req, res) => {
  res.render("practice/result.ejs", {
    title: "GET",
    userInfo: req.query, // 생김샘 {id2: "", pd2: "", agree:[]}
    addInfo: false,
  });
});

app.post("/practice", function (req, res) {
  console.log(req.body);
  const postInfo = req.body;
  res.render("practice/result.ejs", {
    title: "POST",
    userInfo: postInfo, // 생김샘 {id2: "", pd2: "", agree:[]}
    addInfo: true,
  });
});

// Validation
app.post("/js-form-check", (req, res) => {
  console.log(req.body);
  res.send("validation 응답");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
