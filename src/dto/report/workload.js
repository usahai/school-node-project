import { INTERNAL_SERVER_ERROR } from "http-status-codes";
import ErrorBase from "../../errors/ErrorBase";

export default function processWorkload(data) {
	if (data.length > 0) {
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
	} else {
		return new ErrorBase("Data not found", INTERNAL_SERVER_ERROR, INTERNAL_SERVER_ERROR);
	}

	return resp;
}
