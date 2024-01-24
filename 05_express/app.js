const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
// app.set(views 고정값, "./views(파일명에 따라 변동)");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/public"));

/* render의 두번째 인자에서 
   index.ejs에서 사용할 정보 전달 
*/
app.get("/", (request, response) => {
  // response.send("Hello express");
  response.render("index.ejs", {
    btns: ["apple", "banana"],
    isLogin: true,
    userInfo: {
      name: "allie",
      msg: "식사는 맛있게 하셨나요!",
    },
  });
});

// 라우팅: http://localhost:8080/register.ejs 파일로 갈때
app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// page nt found, 404 페이는 맨 마지막에 설정
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
  // console.log("http://localhost:" + PORT);
});
