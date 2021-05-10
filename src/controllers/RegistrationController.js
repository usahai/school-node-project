import express from "express";
import { NO_CONTENT, BAD_REQUEST } from "http-status-codes";
import Logger from "../config/logger";
import ErrorBase from "../errors/ErrorBase";
import { AddTeacher, AddStudent, AddSubject, AddClass } from "../models/register";
import { API_RESPONSE, DB_TABLE } from "../util/constants";

const RegistrationController = express.Router();

const LOG = new Logger("RegistrationController.js");

const registerHandler = async (req, res, next) => {
	try {
		let reqData = req.body;
		let keys = Object.keys(reqData);

		keys.forEach(async key => {
			let obj = reqData[`${key}`];

			try {
				switch (key) {
					case DB_TABLE.TEACHER:
						if (Array.isArray(obj)) {
							return await AddTeacher.bulkCreate(obj, { fields: ["name", "email"] });
						} else {
							return await AddTeacher.create(obj, { fields: ["name", "email"] });
						}
					case DB_TABLE.STUDENTS:
						if (Array.isArray(obj)) {
							return await AddStudent.bulkCreate(obj, { fields: ["name", "email"] });
						} else {
							return await AddStudent.create(obj, { fields: ["name", "email"] });
						}
					case DB_TABLE.SUBJECT:
						if (Array.isArray(obj)) {
							return await AddSubject.bulkCreate(obj, { fields: ["subjectCode", "name"] });
						} else {
							return await AddSubject.create(obj, { fields: ["subjectCode", "name"] });
						}
					case DB_TABLE.CLASS:
						if (Array.isArray(obj)) {
							return await AddClass.bulkCreate(obj, { fields: ["classCode", "name"] });
						} else {
							return await AddClass.create(obj, { fields: ["classCode", "name"] });
						}
					default:
						return;
				}
			} catch (error) {
				throw new ErrorBase("Entry error", BAD_REQUEST, BAD_REQUEST);
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
