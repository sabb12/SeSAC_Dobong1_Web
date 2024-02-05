-- 1. database 관련 명령어

-- DB 목록 확인
SHOW DATABASES;

-- DATABASE 삭제
DROP DATABASE sesac;
DROP DATABASE mydatabase;

-- CREATE: DATABASE 생성
CREATE DATABASE sesac DEFAULT CHARACTER set utf8 COLLATE utf8_general_ci;
/*
  dobong 이라는 데이터 베이스를 생성하는데,
  문자열셋으로 utf8mb4를, 콜레이션으로 utf8mb4_unicode_ci를 사용!
  utf8mb4는 utf8보다 더많은 문자 지원(이모지(일부) 저장 가능)
  이모지를 저장하는 DB라면 utf8mb4, 이모지를 저장하지 않아도 된다면 utf8
*/
CREATE DATABASE dobong character set utf8mb4 COLLATE utf8mb4_unicode_ci;

SHOw DATABASES;

-- use 명령어(데이터 베이스 사용 선언):이 데이터 베이스를 사용하겠다!
USE sesac;

-- 2. table 관련 명령어---

-- 1. 테이블 생성
/*
   create table products(
     속성1 값형식 제약조건, 
     속성2 값형식 제약조건,
   )
*/
-- 제약조건
-- NOT NULL: NULL 허용 X
-- AUTO_INCREMENT: 자동 숫자 증가
-- PRIMARY KEY: 이 속성은 기본기이라고 알려 주는 것(중복 허용 x, null값 허용 x)
-- DEFAULT: 기본값
-- UNIQUE: 중복허용 x, null값 허용
-- 마지막 , 마 지움
create table products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_model VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

-- 테이블 목록 확인
show TABLES;

-- desc: products 테이블에 어떤 컬럼이 있는지 확인(테이블 구조 확인)
desc products;

-- 테이블 삭제: 데이터 전체 삭제된다
drop table products;

-- 테이블에 있는 데이터만 삭제
TRUNCATE TABLE prducts;

-- 테이블 변경(수정) ALTER
-- 1. 컬럼 추가
ALTER Table products ADD new_column VARCHAR(20);

-- 2. 특정 column 수정(varcharㄹ르 int로 수정)
ALTER Table products MODIFY new_column INT;

-- 3. 특정 컬럼 삭제
ALTER Table products DROP new_column;

SHOW DATABASES;
SHOW TABLES;
-- DML
-- Data manipulation language(데이터 조작어)
-- user TABLE(id: not null AUTO_INCREMENT PRIMARY KEY, 
-- name: VARCHAR(10) not null, 
-- age: int not null, 
-- address: VARCHAR(100));

create table user(
    id VARCHAR(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);

SHOW TABLES;
desc user;

-- CREATE(데이터 추가) > INSERT INTO
-- INSERT INTO 테이블이름(컬럼1, 컬럼2,..) VALUES(값1, 값2, ...)insert into user (name, age, address) VALUES('김민정',20,'서울특별시 마포구');
insert into user (name, age, address) VALUES('이한이',30,'서울특별시 강남구');
insert into user (name, age, address) VALUES('이지은',22,'대구광역시 동구');
insert into user (name, age, address) VALUES('윤세희',25,'부산광역시 관악구');
insert into user (name, age, address) VALUES('박수진',19,'서울특별시 노원구');
insert into user (name, age, address) VALUES('박찬희',23,'서울특별시 강서구');
insert into user (name, age, address) VALUES('이지수',32,'부산광역시 동구');
insert into user (name, age, address) VALUES('최솔희',37,'강원도 강릉시');
insert into user (name, age, address) VALUES('한소희',26,'충청남도 공주시');
insert into user (name, age, address) VALUES('권희수',40,'강원도 속초시');
insert into user (name, age, address) VALUES('김민지',22,'서울특별시 중구');

-- 테이블 전체 조회
SELECT * from user;

-- 데이터 수정: 어떤 테이블인지
-- UPDATE 테이블이를 SET 데이터 어떻게 수정할건지 where 언떤 데이털르;
UPDATE user SET name="Jae" where id=14;

-- 3. 데이터 삭제
-- DELETE FROM 테이블이름 WHERE 삭제 조건;
-- DELETE FROM user;: 전체 데이터 삭제
-- DELETE FROM user WHERE id=1;: where 이후 조건에 따른 데이터 삭제
DELETE FROM user WHERE id=1;

DELETE FROM user;

-- 이씨인 사람 지우기 >> 전체 데이터 삭제
DELETE from user where name like "이%";

TRUNCATE table user; 

-- 4. 데이터 조회(READ) select ~from
-- *: 전체
SELECT * FROM user; -- user 테이블에서 전체 컬럼 조회
SELECT name from user; -- 이름 컬럼만 조회

SELECT name, age from user; -- 이름과 나이 컬럼 조회

-- where 절로 조건 적용
SELECT * from user where age >= 25;
SELECT * from user where id=3;
SELECT name from user where id=3;

SELECT id, age from user where name = "이지은";

-- order by: 데이터 정렬
-- desc: 내림차순
-- asc: 오름차순(default)

SELECT * from user order by age;
SELECT * from user order by age ASC;
SELECT * from user order by age DESC;

SELECT * from user WHERE id > 6 ORDER BY age;

-- LIKE: 문자열 패턴 조회(where와 함께 쓰임)
-- 서울로 시작하는 조소 찾기.
SELECT * from user WHERE address LIKE "서울%"

-- 이름의 마지막 글자가 "희"인 사람.
SELECT * from user WHERE name LIKE "%희"; -- or __희

-- 주소에 광역시가 들어가는 사람 찾기
SELECT * from user WHERE address LIKE "%광역시%";

-- 이름에 희가 들어가는 사람 이름컬럼만 조회, age 기준 내리차순 정렬
SELECT name from user WHERE name LIKE "%희%";

-- LIMIT: 데이터의 개수 제한
SELECT * from user LIMIT 3;


SELECT * from user where address LIKE "서울%" LIMIT 2;

-- BETWEEN A AND B // a 와 b 사이값 조희(포함)
SELECT * from user where age BETWEEN 25 AND 30;

-- IN(리스트): 리스트의 요소와 일치하면 참
SELECT * from user where age IN(20,21,22,23);

-- IS NULL / IS NOT NULL
INSERT INTO user(name, age) VALUES("서현승", 28);

SELECT * from user;

SELECT * from user WHERE address is null;

-- 논리 연산자: AND, OR, NOT
-- 주소가 null이 아니면서 age가 25보다 큰 전체 속성 검색
SELECT * from user where address is NOT NULL and age > 25;
SELECT * from user where address is NOT NULL or age > 25;

-- 이씨 이면서 나이가 22살인 사람(이름 속성만 출력)
SELECT name from user WHERE name LIKE "이%" AND age=22; 

-- distinct(중복 튜플 제거);
SELECT age from user;
SELECT DISTINCT age from user;

----- 실습
-- 1번. DDL
CREATE DATABASE member DEFAULT CHARACTER set utf8 COLLATE utf8_general_ci;
USE member;
create table member(
    id VARCHAR(20) PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age int,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) default 'x' 
);
desc member;

show DATABASES;
SELECT * from member;

DROP DATABASE member;

-- 2번. DDL
ALTER Table member ADD  interest VARCHAR(100);
ALTER Table member MODIFY id VARCHAR(10);;
ALTER Table member DROP age;
DESC member;


-- 3번. DDL
CREATE DATABASE user DEFAULT CHARACTER set utf8 COLLATE utf8_general_ci;
USE user;
-- ENUM("F", "M", "") 이중 들어 오게 option 줄수 있다
create table user(
    id VARCHAR(10) PRIMARY KEY NOT NULL,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM("F", "M", "") DEFAULT "",
    birthday Date not NULL,
    age int(3) not NULL DEFAULT 0
);
desc user;

-- 4번. DML
INSERT into user(id, pw, name, gender, birthday, age) VALUES('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31',33);
insert into user(id, pw, name, gender, birthday, age) VALUES('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31',31);
insert into user(id, pw, name, gender, birthday, age) VALUES('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31',31);
insert into user(id, pw, name, gender, birthday, age) VALUES('power70', 'qxur8sda', '변사또', 'M', '1970-05-02',53);
insert into user(id, pw, name, gender, birthday, age) VALUES('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
insert into user(id, pw, name, gender, birthday, age) VALUES('widowmaker', '38ewifh3', '워도우', 'F', '1976-06-27', 47);
insert into user(id, pw, name, gender, birthday, age) VALUES('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
insert into user(id, pw, name, gender, birthday, age) VALUES('jungkrat', '41ifha7f', '정크랫', 'M', '1999-11-11', 24);
SELECT * from user;


-- 5번. DDL 데이트 조회, 수정, 삭제
-- 모든 회원목록, birthday 컬럼을 기준으로 오름차순 정렬
SELECT * from user order BY birthday ASC;

-- gender="M"인값 가져오는데 name기준으로 내림차순 정렬
SELECT * from user where gender="M" ORDER BY name DESC;

-- 1990년대 태어난 회원의 id, name 컬럼을 가져와 목록으로 보여주세요
SELECT id, name from user where birthday LIKE "199%";

-- 6월생 회원목록, birthday기준으로 오름차순 정렬 or "__-06-__"
SELECT * from user WHERE birthday LIKE "%-06-%" order by birthday; 

-- gender값이 M이고 1970년대 태어난 회원 목록
SELECT * from user WHERE gender="M" AND birthday LIKE "197%";

-- 모든 회원중 age기준으로 내림차순 정렬, 그런데 처음 3개의 레코드만 가져오기
SELECT * from user ORDER BY age DESC LIMIT 3;

-- 모든 회원 중 나이가 25이상 50이하
SELECT * from user WHERE age BETWEEN 25 and 50;
-- SELECT * from user WHERE age >= 25 AND age <= 50;

-- id가 hong1234인 pw를 12345678로 변경
UPDATE user SET pw="12345678" where id="hong1234";
SELECT pw from user where id="hong1234";

-- id컬럼이 jungkrat인 레코드 "삭제"
DELETE from user WHERE id="jungkrat";

SELECT * from user;


-- select >> from >> where >> group by >> having >> order by >> limit