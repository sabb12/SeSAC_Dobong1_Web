"use strict";

const Sequelize = require("sequelize");
/* config에 정보는 config.json 파일 부분이다
 "development": {
    "username": "sesac",
    "password": "lion0923!",
    "database": "sesac",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
*/
const config = require(__dirname + "/../config/config.json")["development"];
console.log("config: ", config);

// const config = require(DB명, 사용자명, 비밀번호, config 정보 전체);
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
const db = {};
db.sequelize = sequelize; // db = {sequelize: sequelize}
db.Sequelize = Sequelize; // db = {sequelize: sequelize, Sequelize: Sequelize}

//(sequelize = Visitor.js의 function Sequelize, Sequelize= DataTypes);로 전달 해주는 것
db.Visitor = require("./Visitor")(sequelize, Sequelize);

module.exports = db;

// db라는 변수를 내보내기 하는 중
