INSERT INTO class (classCode, name) VALUES ('P2-1', 'P2 Diligent');
INSERT INTO class (classCode, name) VALUES ('P3-1', 'P3 Innovation');

INSERT INTO subject (subjectCode, NAME) VALUES ('MATH', 'Mathematics');
INSERT INTO subject (subjectCode, NAME) VALUES ('SCI', 'Science');

INSERT INTO teacher (NAME, email) VALUES ('Teacher 2', 'teacher2@gmail.com');

INSERT INTO teacher_subject_class (teacherEmail, subjectCode, classCode) VALUES ('teacher1@gmail.com', 'ENG', 'P1-1');
INSERT INTO teacher_subject_class (teacherEmail, subjectCode, classCode) VALUES ('teacher1@gmail.com', 'ENG', 'P2-1');
INSERT INTO student_subject_class (studentEmail, subjectCode, classCode) VALUES ('student1@gmail.com', 'ENG', 'P1-1');
INSERT INTO student_subject_class (studentEmail, subjectCode, classCode) VALUES ('student1@gmail.com', 'ENG', 'P2-1');

INSERT INTO teacher_subject_class (teacherEmail, subjectCode, classCode) VALUES ('teacher1@gmail.com', 'MATH', 'P1-1');
INSERT INTO teacher_subject_class (teacherEmail, subjectCode, classCode) VALUES ('teacher1@gmail.com', 'MATH', 'P2-1');
INSERT INTO teacher_subject_class (teacherEmail, subjectCode, classCode) VALUES ('teacher1@gmail.com', 'MATH', 'P3-1');
INSERT INTO teacher_subject_class (teacherEmail, subjectCode, classCode) VALUES ('teacher1@gmail.com', 'SCI', 'P2-1');
INSERT INTO teacher_subject_class (teacherEmail, subjectCode, classCode) VALUES ('teacher2@gmail.com', 'ENG', 'P2-1');
INSERT INTO teacher_subject_class (teacherEmail, subjectCode, classCode) VALUES ('teacher2@gmail.com', 'MATH', 'P2-1');
INSERT INTO teacher_subject_class (teacherEmail, subjectCode, classCode) VALUES ('teacher2@gmail.com', 'SCI', 'P2-1');
