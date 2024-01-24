const http = require("http");
// console.log("http", http);

// 실제 html 파일을 일게 해주고싶으면 "fs"를 사용하면된다
// const data = fs.readFileSync("./index.html");
// respsonse.write(data);
// respsonse.end();
const fs = require("fs");

// const server = http.createServer(요처, 리스번스);
const server = http.createServer(function (request, respsonse) {
  //   console.log("request: ", request);
  const data = fs.readFileSync("./index.html");

  /* response.writeHead(상태코드, 헤더정보
      - text/html: 응답의 콘텐트 형식이 HtML 이라는 의미
      - 인코딩 방식이 utf-8;
  */
  //  "content-tyep": "text/htm"파일을 보낸다
  //charset-utf-8 안 깨지게 잘 보여주세요
  respsonse.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  //   respsonse.write("응답완료!"); // 이거 하고 웹싸이트 틀면 계속 로딩만 된다
  //   respsonse.end("<h3>진짜  완료!!</h3>"); // 로딩 끝내주는 것, 그리고 새로고침 한다 해서 로딩이 된다는게 아니고, 껐다 다시 켜야된다

  respsonse.write(data);
  respsonse.end();
});

// 1. request 이벤트: 클라이언트 요청
server.on("request", function (req, res) {
  console.log("request 이벤트 실행!");
});

// 2. connection 이벤트: 클라이언트 접속 했을 때 발생
server.on("connection", function (req, res) {
  console.log("connection 이벤트 실행!");
});

// port를 열어준다 server.listen(PORT)
server.listen(8080, function () {
  console.log("server is open!!");
  console.log(`http://localhost:${8080}`);
});
