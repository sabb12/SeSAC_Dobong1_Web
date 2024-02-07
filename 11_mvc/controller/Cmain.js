const Comment = require("../model/Comment"); // commentsInfo()

/*
    controller에서는 model에서 받은 데이터를 가공해서
    view에 
*/

// localhost: 8080/

// GET /
exports.main = (req, res) => {
  res.render("index");
};
// router.get("/", (req, res) => {
//   res.render("index");
// });

// GET / comments
// .commentInfo(): [{}, {}, {}, {}]
exports.comments = (req, res) => {
  res.render("comments", { commentInfo: Comment.commentInfo() });
};
// router.get("/comments", (req, res) => {
//   console.log("comments:", comments);
//   res.render("comments", { commentInfo: comments });
// });

// GET / comment/:id (params 사용) >> comment.ejs
exports.comment = (req, res) => {
  const commentId = req.params.id; // 1, 2, 3, 4
  // if (commentId < 1 || commentId > comments.length) {
  //   return res.render("404");
  // }
  // if (isNaN(commentId)) {
  //   return res.render("404");
  // }
  // or 한번에 처리
  if (!Comment.commentInfo()[commentId - 1]) return res.render("404");

  res.render("comment", { commentInfo: Comment.commentInfo()[commentId - 1] });
};
// router.get("/comment/:id", (req, res) => {
//   const commentId = req.params.id; // 1, 2, 3, 4
//   // if (commentId < 1 || commentId > comments.length) {
//   //   return res.render("404");
//   // }
//   // if (isNaN(commentId)) {
//   //   return res.render("404");
//   // }
//   // or 한번에 처리
//   if (!comments[commentId - 1]) return res.render("404");

//   res.render("comment", { commentInfo: comments[commentId - 1] });
// });
