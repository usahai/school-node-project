export const testQuery = "SELECT * FROM class";

export const workloadQuery = `
SELECT t.name AS teacherName, sb.subjectCode, sb.name AS subjectName, COUNT(tsc.classCode) AS numberOfClasses
FROM teacher t
INNER JOIN teacher_subject_class tsc ON t.email = tsc.teacherEmail
INNER JOIN subject sb ON tsc.subjectCode = sb.subjectCode
INNER JOIN class c ON tsc.classCode = c.classCode
GROUP BY teacherName, sb.subjectCode
ORDER BY teacherName;
`;
