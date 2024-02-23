// env 사용 설정
// config.js 파일을 만들어야 env 사용 가능
// const dotenv = require("dotenv").config()
// dotenv.config()
require("dotenv").config();

const development = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "sesac",
  host: "127.0.0.1",
  dialect: "mysql",
};

module.exports = { development };
