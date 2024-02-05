const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/uploads", express.static(__dirname + "/uploads")); // diskStorage
app.use("/public", express.static(__dirname + "/static")); // css 연결

const uploadDetail = multer({
  // diskStorage는 저장 공간 지정
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      //  done(null, 어떤 공간에 저장 할지), uploads라는 폴더가 자동 생성 되지 않는다 그래서 만들어 줘야 한다;
      done(null, "uploads/");
    },
    filename: function (req, file, done) {
      const extension = path.extname(file.originalname);
      // done(null, "index."
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/register", uploadDetail.single("userFile"), function (req, res) {
  // uploadDetail.single 아니고 uploadDetail.array 면 req.files다
  console.log(req.file);
  console.log(req.body);
  // {
  //   fieldname: 'userFile',
  //   originalname: '5.jpg',
  //   encoding: '7bit',
  //   mimetype: 'image/jpeg',
  //   destination: 'uploads/',
  //   filename: '51706837254033.jpg',
  //   path: 'uploads\\51706837254033.jpg',
  //   size: 6404
  // }
  // result에 정보를 보내 주는 것이다
  res.render("result", {
    image: req.file ? req.file.path : null, // 여기 문제 일수도
    userInfo: req.body,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
