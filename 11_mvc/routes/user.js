const express = require("express");
const router = express.Router();
const controller = require("../controller/user");

// GET /user
router.get("/", controller.user);
// GET /user/user 이렇게 들어 온다
// router.get("user", controller.user);

/* 
    [예시]
    GET /user/aa
    router.get("/aa", controller.a);

    POST/user/login
    router.port("/login", controller.b);
*/

module.exports = router;
