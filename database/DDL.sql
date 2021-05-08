CREATE DATABASE IF NOT EXISTS `school-administration-system`;
USE `school-administration-system`;

--
-- Table structure for table `school-administration-system`
--

DROP TABLE IF EXISTS teacher_subject_class;
DROP TABLE IF EXISTS student_subject_class;
DROP TABLE IF EXISTS teacher;
DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS subject;
DROP TABLE IF EXISTS class;

CREATE TABLE teacher (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(64) DEFAULT NULL,
  email varchar(64) DEFAULT NULL,
  PRIMARY KEY(id),
  CONSTRAINT teacher_email_unique UNIQUE(email)
  )ENGINE=InnoDB;
 
INSERT INTO teacher (name, email) VALUES ('Teacher 1', 'teacher1@gmail.com');
INSERT INTO teacher (name, email) VALUES ('Teacher 2', 'teacher2@gmail.com');

CREATE TABLE student (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(64) DEFAULT NULL,
  email varchar(64) DEFAULT NULL,
  PRIMARY KEY(id),
  CONSTRAINT student_email_unique UNIQUE(email)
  )ENGINE=InnoDB;
  
INSERT INTO student (name, email) VALUES ('Student 1', 'student1@gmail.com');
INSERT INTO student (name, email) VALUES ('Student 2', 'student2@gmail.com');

CREATE TABLE subject (
  id int NOT NULL AUTO_INCREMENT,
  subjectCode varchar(64) DEFAULT NULL,
  name varchar(64) DEFAULT NULL,
  PRIMARY KEY(id),
  CONSTRAINT subjectCode_unique UNIQUE(subjectCode)
  )ENGINE=InnoDB;
  
INSERT INTO subject (subjectCode, name) VALUES ('ENG', 'English');
INSERT INTO subject (subjectCode, name) VALUES ('MATH', 'Math');

CREATE TABLE class (
  id int NOT NULL AUTO_INCREMENT,
  classCode varchar(64) DEFAULT NULL,
  name varchar(64) DEFAULT NULL,
  PRIMARY KEY(id),
  CONSTRAINT subject_email_unique UNIQUE(classCode)
  )ENGINE=InnoDB;

INSERT INTO class (classCode, name) VALUES ('P1-1', 'Integrity');
INSERT INTO class (classCode, name) VALUES ('P1-2', 'Enterprise');

CREATE TABLE teacher_subject_class (
  teacherEmail varchar(64) NOT NULL,
  subjectCode varchar(64) NOT NULL,
  classCode varchar(64) NOT NULL,
  PRIMARY KEY(teacherEmail, subjectCode, classCode),
  CONSTRAINT FK_teacher_email_tsc FOREIGN KEY (teacherEmail) REFERENCES teacher(email),
  CONSTRAINT FK_subject_code_tsc FOREIGN KEY (subjectCode) REFERENCES subject(subjectCode),
  CONSTRAINT FK_class_code_tsc FOREIGN KEY (classCode) REFERENCES class(classCode)
)ENGINE=InnoDB;

INSERT INTO teacher_subject_class (teacherEmail, subjectCode, classCode) VALUES ('teacher1@gmail.com', 'ENG', 'P1-1');
INSERT INTO teacher_subject_class (teacherEmail, subjectCode, classCode) VALUES ('teacher1@gmail.com', 'ENG', 'P1-2');

CREATE TABLE student_subject_class (
  studentEmail varchar(64) NOT NULL,
  subjectCode varchar(64) NOT NULL,
  classCode varchar(64) NOT NULL,
  PRIMARY KEY(studentEmail, subjectCode, classCode),
  CONSTRAINT FK_student_email_ssc FOREIGN KEY (studentEmail) REFERENCES student(email),
  CONSTRAINT FK_subject_code_ssc FOREIGN KEY (subjectCode) REFERENCES subject(subjectCode),
  CONSTRAINT FK_class_code_ssc FOREIGN KEY (classCode) REFERENCES class(classCode)
)ENGINE=InnoDB;

INSERT INTO student_subject_class (studentEmail, subjectCode, classCode) VALUES ('student1@gmail.com', 'ENG', 'P1-1');
INSERT INTO student_subject_class (studentEmail, subjectCode, classCode) VALUES ('student1@gmail.com', 'ENG', 'P1-2');