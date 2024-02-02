const express = require("express");
const path = require("path");
const multer = require("multer");
const { title } = require("process");

const app = express();
const PORT = 8080;

/* 임시 DB 만들기
   임시 데이터 배열형태로 만들어서 화면에 띄워주는 작업
*/

let tempDB = [
  {
    contentID: 1,
    title: "글제목 1",
    content: "글 내용 1",
    img: null, // null or path(string)
  },
  {
    contentID: 2,
    title: "글제목 2",
    content: "express, ejs, multer 복습을 해보아요",
    img: null, // null or path(string)
  },
  {
    contentID: 3,
    title: "글제목 3",
    content: "백엔드가 많이 어렵죠?? 우리 모두 힘내봐요..",
    img: null, // null or path(string)
  },
  {
    contentID: 4,
    title: "글제목 4",
    content: "글 내용 4",
    img: null, // null or path(string)
  },
];

// 이모티콘 창 어떻게 한건지?
const userID = "Leo짱";

// 미들웨어 설정
/*
    미들웨어란?
    요청(request)과 응답(response) 사이에서 중간다리 역할을 하는 SW
        ex1) requset의 body를 서버에서 읽을 수 있도록 도와주는 "body-parser"
        ex2) request의 file에서 보내는 파일 정보를 확인할 수 있도록 도와주는 "multer"
        ex3) static 파일 설정을 도와주는 app.use(express.static(~~));
*/
/* 
    미들웨어 1. views 설정(set() 이용)
     - view란?
        사람들 눈에 보이는 화면, 프론트단 html
        view 설정
        1. html 파일들을 어디서 모아둘건지(view 폴더 설정)
        2. html 을 보여주기 위해서 어떻게 할건지 (view engine)
     - view engine (ejs를 쓰고 있는데)
        서버에서 보낸 js 변수를 클라이언트 사용할 수 있도록 도움
        pug, ejs, nunjucks, ... 등이 있지만 html과 가장 유사한것은 ejs
*/
app.set("view engine", "ejs");
// views를 ./views여기에 보여 줄것이다
app.set("views", "./views");

/*
  미들웨어2. static 폴더 설정
   - static 폴더란?
   외부(브라우저 등의 client)에서 접근 가능한 폴더
   프론트 js, css, 이미지, 동영상...
*/
app.use("/static", express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.static("/uploads")); // 위 코드 이 코드 처럼 작성도 가능

/* 
  미들웨어3. body-parse 설정 (express 내장 모듈)
  - req.body 기본적으로 undefined
  body-parse가 req.body를 서버측에서 사용할 수 있도록(parsing) 파싱해줌
*/
// true queryString 모듈 사용, false, qs 모듈 사용
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // 요청 body 에서 json 정보만 가지고 오도록

/*
   미들웨어 4. multer 설정 (npm install multer, 설치 필요)
   - req.body input type="file"의 정보는 string
     실제 파일 업로드를 하고, 파일 정보를 확인하기 위해서 사용
     // 빈 폴더는 git에 올라가지 않다, .gitkeeper 하면 된다
*/
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/");
    },
    filename: function (req, file, done) {
      /*
        extname(파일명): 확장자 추출;
        basename(파일명: 확장자): 확장자를 제외한 파일명 추출;
        basename(경로명): (확장자 포함된) 파일명 추출
        (file.originalname, extension): extension 확장자 빼고
      */
      const extension = path.extname(file.originalname);
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// ###라우팅
/* 
   틍정 url로 특정 method에 대한 요청 처리
   - url: 사용자가 정한 url
   - method: get, post, put, patch, delete
     CRUD를 위한 것(CRUD: 데어터를 create, read, update, delete)
     1. get: "R"ead, localhost: 8080/sesac
        브라우저의 url에 주소를 입력하는 것은 모두 get요청!!
        localhost:8080/sesac의 화면을 보기 위해서는
        /sesac의 get요청에 대한 응답(response)이 있어야 볼 수 있다.
        res.send() res.end() res.write() res.render() ... 등등
     2. post: "C"reate 새로운 정보를 "입력" "추가"할 때
     3. put & patch: "U"pdate
        수정 관련 메소드
     4. delete: 삭제
*/
app.get("/", function (req, res) {
  res.render("index.ejs", {
    user: userID,
    contentData: tempDB, // [{},{}]
  }); // or "index"
});

// https://blog.naver.com/[ppss0830]/[2232342342]
// https://blog.naver.com/[ppss0830]/[2232342342]
// /:id/:content

/*
   params vs. query
   - params
       - 서버에서 url 펴기 /:params
       - 클라이언트 요청시 /123라고 한다면
       - req.params 에서 정보 확인가능 {params: "123"}이 숫자로 들어 온다
       - 네이버 블로그처럼 여러 계정의 글을 "조회"할 때 == params
   - query
       - 서버에서 url 표기 / sesac
       - 클라이언트에서 url 표기 /sesac? id=123&content=123
       - req.query 에서 정보 확인 가능 {id:"123", content: "123"}
       - 검색, 필터링 기능 == query
*/

// 한번에 put, detelet, add을 할 거다
// content/1 content/2 content/3 ...을 만들어 준것이다
app.get("/content/:contentID", (req, res) => {
  console.log(req.params); // {contentID: "1"}
  const { contentID } = req.params;
  const isContent = tempDB.filter(
    (obj) => obj.contentID === Number(contentID)
  )[0];
  console.log("isContent: ", isContent); // {}, undefined
  if (isContent) {
    res.render("content", isContent);
    // 다른 것도 넘기고 싶을 때
    // res.render("content", {
    //   ...isContent,
    //   userName: "leo",
    // });
  } else {
    res.render("404");
  }
});

// // 이걸 위 코드에서 하나로 만들 수 있다.
// app.get("*", (req, res) => {
//   res.render("404");
// });

app.delete("/blog/delete", (req, res) => {
  console.log(req.query);
  const { contentID } = req.query;
  tempDB = tempDB.filter((object) => object.contentID !== contentID);
  res.end();
});

// 세글 작성하기
// /content/write 이렇게 하면 위에 /:contentID에서 처리해서 여기까지 실행이 안된다
app.get("/write", function (req, res) {
  res.render("writeContent");
});

app.post("/blog/post", upload.single("img"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  //  contentID: tempDB[tempDB.length - 1(제일 끝에 있는 애)] + 1
  tempDB.push({
    contentID:
      tempDB.length !== 0 ? tempDB[tempDB.length - 1].contentID + 1 : 1,
    title: req.body.title,
    content: req.body.content,
    img: req.file ? req.file.path : null,
  });
  console.log("tempDB: ", tempDB);
  res.redirect("/");
});

// ### 포트열기
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
