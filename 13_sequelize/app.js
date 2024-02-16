const express = require("express");
const app = express();
const db = require("./models");
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우터 분리
// require("./routes"); index만 안서도 되고 다른건 require("./routes/뭐뭐뭐 작성 해야된다");
const indexRouter = require("./routes");
app.use("/", indexRouter);

app.get("*", (req, res) => {
  res.render("404");
});

// force: true는 위험 하니깐 안쓰는게 좋음
db.sequelize.sync({ force: false }).then(() => {
  console.log(result);
  console.log("DB연결 성공");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
