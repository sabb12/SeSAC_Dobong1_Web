// TODO: 컨트롤러 코드
const models = require("../models");

// GET /user/signin
exports.get_signin = (req, res) => {
  res.render("signin");
};

// GET /user/signup
exports.get_signup = (req, res) => {
  res.render("signup");
};

// POST /user/signup
// 회원가입 요청
exports.post_signup = (req, res) => {
  // console.log("controller", req.body);
  // //{userid, pw, name}
  // User.post_signup(req.body, () => {
  //   res.end();
  // });

  // const sql = `INSERT INTO user(userid, name, pw)
  // VALUES("${req.body.userid}","${req.body.name}","${req.body.pw}")`;

  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then((result) => {
    console.log("회원가입 요청: ", result);
    // console.log(result.id);
    // 회원가입 요청 User {
    //   dataValues: { id: 7, userid: 'abcd', name: 'leo', pw: '12' },
    //   _previousDataValues: { userid: 'abcd', name: 'leo', pw: '12', id: 7 },
    //   uniqno: 1,
    //   _changed: Set(0) {},
    //   _options: {
    //     isNewRecord: true,
    //     _schema: null,
    //     _schemaDelimiter: '',
    //     attributes: undefined,
    //     include: undefined,
    //     raw: undefined,
    //     silent: undefined
    //   },
    //   isNewRecord: false
    // }
    res.end();
  });
};

// POST /user/signin
// 로그인 요청
exports.post_signin = (req, res) => {
  // console.log("controller", req.body);
  // // {userid, pw}
  // User.post_signin(req.body, (result) => {
  //   console.log("controller", result);
  //   // 로그인 성공시, true를 뷰로 전달
  //   // 로그인 실패시, false를 뷰로 전달

  //   if (result.length > 0) {
  //     // res.send({isLogin:true, userInfo:result[0]});
  //     res.send(true);
  //   } else {
  //     res.send(false);
  //   }
  // });

  // [sequelize 적용]
  // const sql = `SELECT * FROM user WHERE userid="${data.userid}" and pw="${data.pw}" LIMIT 1`;

  // findOne = 객체 하나 반환, findAll = 배열로 반환
  // findONe은 LIMIT 없어도 OK 입니다.
  models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
    // {} or null
    // {} = dataValues: { id: 7, userid: 'abcd', name: 'leo', pw: '12' },
  }).then((result) => {
    // result: findOne 이용해서 찾은 결과를 반환 or
    // 데이터를 못찾았다면 null 반환
    console.log("로그인 요청: ", result);
    result ? res.send(true) : res.send(false);
    // if (result) {
    //   res.send(true);
    // } else {
    //   res.send(false);
    // }
  });
};

// POST /user/profile
// 프로필 페이지 요청
exports.post_profile = (req, res) => {
  // console.log("req.body", req.body);
  // // {userid}
  // User.post_profile(req.body.userid, (result) => {
  //   console.log(result); //{id, userid, name, pw}
  //   res.render("profile", { data: result });
  // });

  // const sql = `SELECT * FROM user WHERE userid="${id}" LIMIT 1`;

  // [sequelize 적용]
  models.User.findOne({
    where: {
      userid: req.body.userid,
    },
  }).then((result) => {
    console.log("프로필 페이지 요청: ", result);
    res.render("profile", { data: result });
  });
};

// POST /user/profile/edit
// 회원 정보 수정
exports.edit_profile = (req, res) => {
  // console.log(req.body);
  // User.edit_profile(req.body, () => {
  //   res.end();
  // });
  // const sql = `UPDATE user SET name="${data.name}", pw="${data.pw}"
  // WHERE id="${data.id}`;

  models.User.update(
    {
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((result) => {
    console.log("회원 정보 수정: ", result);
    res.end();
  });
};

// POST /user/profile/delete
// 회원 정보 삭제
exports.delete_profile = (req, res) => {
  // console.log(req.body); //{id: form.id.value}
  // User.delete_profile(req.body.id, () => {
  //   res.end();
  // });

  // const sql = `DELETE FROM user WHERE id=${id}`;
  models.User.destory({
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    console.log("회원 정보 삭제: ", result);
    res.end();
  });
};
