
-- A대학 학생정보
create Table aStudent(
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,  
    age int not null
);
desc aStudent;

INSERT INTO aStudent (id, name, age) VALUES (20115544, 'a', 34);
INSERT INTO aStudent (id, name, age) VALUES (20156677, 'b', 31);
INSERT INTO aStudent (id, name, age) VALUES (20227755, 'c', 25);
INSERT INTO aStudent (id, name, age) VALUES (20232223, 'd', 23);
INSERT INTO aStudent (id, name, age) VALUES (20201144, 'e', 23);
INSERT INTO aStudent (id, name, age) VALUES (20145145, 'f', 30);
INSERT INTO aStudent (id, name, age) VALUES (20180919, 'g', 26);

SELECT * from aStudent;

create Table bStudent(
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,  
    age int not null
);

desc bStudent;

INSERT INTO bStudent (id, name, age) VALUES (2022091994, 'h', 29);
INSERT INTO bStudent (id, name, age) VALUES (2020101021, 'i', 23);
INSERT INTO bStudent (id, name, age) VALUES (2018187566, 'j', 26);

SELECT * from bStudent;

create Table applySubject(
    apply_id VARCHAR(10) NOT NULL,
    id VARCHAR(10) PRIMARY KEY,
    subject VARCHAR(10) NOT NULL,
    FOREIGN KEY (apply_id) REFERENCES aStudent(id),
    FOREIGN KEY (apply_id) REFERENCES bStudent(id)
);


desc applySubject


INSERT INTO applySubject (id, name, age) VALUES (2022091994, 'h', 29);
INSERT INTO applySubject (id, name, age) VALUES (2020101021, 'i', 23);
INSERT INTO applySubject (id, name, age) VALUES (2018187566, 'j', 26);

SELECT * from applySubject;