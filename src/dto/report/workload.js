export default function processWorkload(data) {
	let resp = data.reduce((acc, value) => {
		if (!acc[value.teacherName]) {
			acc[value.teacherName] = [];
		}

		acc[value.teacherName].push(
			(({ subjectCode, subjectName, numberOfClasses }) => ({
				subjectCode,
				subjectName,
				numberOfClasses
			}))(value)
		);

		return acc;
	}, {});

	return resp;
}
