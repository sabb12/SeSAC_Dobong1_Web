// const Visitor = require("../model/Visitor");
const Visitor = require("../models/Visitor");
const models = require("../models");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  // visitor.ejs에 데이터 보내주기
  // 1. [DB 연결 전, 임시 데이터베이스]
  //   console.log(Visitor.getVisitors());
  //   res.render("visitor", { data: Visitor.getVisitors() });
  // 2. [DB 연결 후!]
  // Visitor.getVisitors((result) => {
  //   // result는 Visitor.js에 cb(rows)의 값이다
  //   console.log(result);
  //   res.render("visitor", { data: result });
  // });
};
// 3. [sequelize 연결!]
models.Visitor.findAll().then((result) => {
  console.log("findAll >>", result);
  res.render("visitor", { data: result });
});

// GET /visitor/:id
exports.getVisitor = (req, res) => {
  console.log(req.params);
  // console.log(req.params.id);

  // [before sequelize]

  // Visitor.getVisitor(req.params.id, (result) => {
  //   console.log("Cvisitor.js 데이터 하나 조회", result); // {}
  //   res.send(result);
  // });
  // [after sequelize]
  models.Visitor.findOne({
    where: { id: req.params.id },
  }).then((result) => {
    console.log(result); // {}
    res.send(result);
  });
};

exports.postVisitor = (req, res) => {
  console.log(req.body); // {id, name, comment}
  // [before sequelize]
  // Visitor.postVisitor(req.body, (result) => {
  //   console.log("Cvisitor.js post", result);
  //   // cb(rows.insertId); = id: result
  //   res.send({ id: result, name: req.body.name, comment: req.body.comment });
  // });
  models:Visitor.create({
    name: req.body.name,,
    comment: req.obdy.comment,
  }).then((result)=>{
    console.log(result);
    res.send({id: result, name: req.body.name, comment, req.body.})
  })
};

exports.deleteVisitor = (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  // [before sequelize]
 models.Visitor.destroy({
  where:{id: req.body.id}
 }).then((result) => {
  console.log("sequelize destory result", result); // 1 or 0이 들어 온다 1 = true, 2 = false
  res.send(req.body.id + "번 방명록 삭제 완료!")
 })
};

exports.patchVisitor = (req, res) => {
 models.Visitor.update(
 {
  name: req.body.name,
  comment: req.body.comment,
 },
{
  where: {id: req.body.id},
})
};
