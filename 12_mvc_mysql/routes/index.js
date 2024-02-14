const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

// (req, res) => {}가 controller이 해주는 것이다
// 랜더링, get 요청
router.get("/", controller.main);
router.get("/visitors", controller.getVisitors);
router.get("/visitor/:id", controller.getVisitor);

// 등록, 삭제, 수정
router.post("/visitor", controller.postVisitor);
router.delete("/visitor", controller.patchVisitor);
router.patch("/visitor", controller.deleteVisitor);

module.exports = router;
