const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

// views 파일들은 여기에 있어요
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  // views파일에 "index"는 index.ejs 파일이다
  res.render("index");
});

app.post("/axios", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
