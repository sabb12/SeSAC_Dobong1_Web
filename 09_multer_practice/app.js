const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/static", express.static(__dirname + "/public"));

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, done) {
      const extension = path.extname(file.originalname);
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

app.post("/displayInfo", uploadDetail.single("userFile"), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  res.render("result", {
    image: req.file,
    userInfo: req.body,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
