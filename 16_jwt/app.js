const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8080;
const SECRET = "1EpvUKcBa4E2bjMDWophywzfonovwP"; // random string

app.set("views", "./views");
app.set("view engine", "ejs");

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userInfo = { id: "cocoa", pw: "1234", name: "코코아", age: 18 };

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// 로그인 요청
// function login()
// jwt 생성
app.post("/login", (req, res) => {
  try {
    console.log("/login: ", req.body);

    const { id, pw } = req.body;
    const { id: realId, pw: realPw } = userInfo;
    if (id === realId && pw === realPw) {
      // jwt 인증 토큰 생성
      // const token = jwt.sign({ 동일하니 하나만 써도 된다 id }, SECRET);
      const token = jwt.sign({ id: id }, SECRET);
      console.log("token: ", token);
      // res.send({ 동일하니 하나만 써도 된다 token });
      res.send({ result: true, token: token });
    } else {
      res.send({ result: false, message: "로그인 정보가 올바르지 않습니다." });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

// token 정보 확인
app.post("/token", (req, res) => {
  try {
    console.log(req.headers.authorization);
    if (req.headers.authorization) {
      // 인증 정보 들어 왔을 때
      // token만을 저장하기 위해서
      const token = req.headers.authorization.split(" ")[1];

      try {
        console.log("token: ", token);
        const auth = jwt.verify(token, SECRET);
        console.log("auth::::: ", auth);
        // verifty()의 리턴값::  { id: 'cocoa', iat: 1708656024 }
        // iat: issued at. 발급된 시간
        if (userInfo.id === auth.id) {
          res.send({ result: true, name: userInfo.name });
        }
        res.end();
      } catch (err) {
        // 잘못된 정보가 들어왔을 때
        console.log("토큰 인증 에러", err);
        res.send({ result: false, message: "인증된 회원이 아닙니다" });
      }
    } else {
      // 인증 정보 안들어 왔을 때
      res.redirect("/login");
    }
  } catch (err) {
    console.log("POST /token: ", err);
    res.status(500).send("server error");
  }
});

app.listen(PORT, () => {
  // console.log(`http://localhost:${PORT}`);
  console.log(`http://115.85.183.123:8080`);
});
