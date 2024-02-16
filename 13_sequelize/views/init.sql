-- Active: 1707101283116@@127.0.0.1@3306@sesac

show TABLES;

CREATE TABLE visitor(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    COMMENT MEDIUMTEXT
);

DESC visitor;

INSERT INTO visitor(name, comment) VALUES("aliie", "hi~");
INSERT INTO visitor values(null, "홍길동", "홍길동입니다.");

SELECT * FROM visitor;

####### [DCL] ######

-- 새로운 user 만들기1
CREATE USER "sesac"@"%" IDENTIFIED BY "lion0923!";
ALTER USER "sesac"@"%" IDENTIFIED WITH mysql_native_password by "lion0923!";
-- 비밀번호 바꾸고 싶다면!

-- 새로운 user 만들기 2
CREATE USER "sesac"@"%" IDENTIFIED WITH mysql_native_password by "lion0923!";
GRANT ALL PRIVILEGES on *.* TO "sesac"@"%" WITH GRANT OPTION;
-- 모든 DB에 접근 가능하도록, sesac 계정에 DB접근 권한을 부여

FLUSH PRIVILEGES;
-- 현재 사용중인 mysql 캐시를 지우고 새로운 설정 적용