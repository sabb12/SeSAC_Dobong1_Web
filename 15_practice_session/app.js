const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8080;

app.set("views", "./views");
app.set("view engine", "ejs");
app.set("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: 세션 설정
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60, // 10분 뒤 세션 종료
      httpOnly: true,
    },
  })
);
const userinfo = { userId: "cocoa", userPw: "1234" };

app.get("/", (req, res) => {
  /*
    로그인된 유저라면 {isLogin:false, user:user}
    로그인 안된 유저라면 {isLogin: true}
  */
  // TODOL user session불러오는 부분
  const user = req.session.user; // "cocoa"
  // 로그인이 된 유저라면 user에 cocoa가 담겨져 있음,
  // 로그인이 안된 유저라면 user는 undefined
  console.log("유저 정보: ", user);
  if (user) {
    // 세션에 user라는 키가 있다면, 로그인 된 상태
    res.render("index", { isLogin: true, user: user });
  } else {
    res.render("index", { isLogin: false });
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

// TODO: 로그인 기능
// 1. 세션 설정
app.post("/login", (req, res) => {
  // user 라는 세션 설정
  console.log(req.body); // {id="", pw=""}
  if (req.body.id === userinfo.userId && req.body.pw === userinfo.userPw) {
    // 로그인 진행
    req.session.user = req.body.id;
    console.log("req.seesion: ", req.session);
    console.log("req.seesion.id: ", req.session.id);
    res.redirect("/");
  } else {
    res.send(`
    <script>
        alert("아이디 또는 비밀번호가 일치하지 않습니다. 다시 시도해주세요.")
        document.location.href = '/login';
    </script>
    `);
  }
});

// TODO: 로그아웃 기능
// 3. 세션 삭제
app.get("/logout", (req, res) => {
  const user = req.session.user;
  if (user) {
    // 로그인된 회원 >> logout  시켜주기
    req.session.destroy((err) => {
      if (err) throw err;
      res.redirect("/");
    });
  } else {
    // 세션 만료된 회원
    res.send(`
        <script>
            alert("이미 세션이 만료되었습니다.")
            document.location.href = "/";
        </script>
    `);
  }
  // 1. 로그아웃 진행
  // 2. 메인페이지 렌더 (redirect)
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

/* req 객체
    - req.session.키 = 값 // 세션 설정 <- 로그인할 때
    - req.session.키 // 세션 사용 << 로그인된 사람인지 확인할 때
    - req.session.destroy(콜백) // 세션삭제 << 로그아웃할 때

*/
