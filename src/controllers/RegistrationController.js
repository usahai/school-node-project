import express from "express";
import { NO_CONTENT, BAD_REQUEST } from "http-status-codes";
import Logger from "../config/logger";
import { AddTeacher, AddStudent, AddSubject, AddClass } from "../models/register";
import { API_RESPONSE, DB_TABLE } from "../util/constants";

const RegistrationController = express.Router();

const LOG = new Logger("RegistrationController.js");

const registerHandler = async (req, res) => {
	try {
		let reqData = req.body;
		let keys = Object.keys(reqData);

		keys.forEach(async key => {
			let obj = reqData[`${key}`];

			switch (key) {
				case DB_TABLE.TEACHER:
					if (Array.isArray(obj)) {
						await AddTeacher.bulkCreate(obj, { fields: ["name", "email"] });
					} else {
						await AddTeacher.create(obj, { fields: ["name", "email"] });
					}
					break;
				case DB_TABLE.STUDENTS:
					if (Array.isArray(obj)) {
						await AddStudent.bulkCreate(obj, { fields: ["name", "email"] });
					} else {
						await AddStudent.create(obj, { fields: ["name", "email"] });
					}
					break;
				case DB_TABLE.SUBJECT:
					if (Array.isArray(obj)) {
						await AddSubject.bulkCreate(obj, { fields: ["subjectCode", "name"] });
					} else {
						await AddSubject.create(obj, { fields: ["subjectCode", "name"] });
					}
					break;
				case DB_TABLE.CLASS:
					if (Array.isArray(obj)) {
						await AddClass.bulkCreate(obj, { fields: ["classCode", "name"] });
					} else {
						await AddClass.create(obj, { fields: ["classCode", "name"] });
					}
					break;
				default:
					return;
			}
		});

		res.status(NO_CONTENT).send(API_RESPONSE.SUCCESS);
	} catch (error) {
		LOG.error(error);
		res.status(BAD_REQUEST).send(error);
	}
};

RegistrationController.post("/register", registerHandler);

export default RegistrationController;
