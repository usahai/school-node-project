import { Sequelize } from "sequelize";
import sequelize from "../config/database";

const AddTeacher = sequelize.define(
	"AddTeacher",
	{
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false
		}
	},
	{
		tableName: "teacher",
		timestamps: false
	}
);

const AddStudent = sequelize.define(
	"AddStudent",
	{
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false
		}
	},
	{
		tableName: "student",
		timestamps: false
	}
);

const AddSubject = sequelize.define(
	"AddSubject",
	{
		subjectCode: {
			type: Sequelize.STRING,
			allowNull: false
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false
		}
	},
	{
		tableName: "subject",
		timestamps: false
	}
);

const AddClass = sequelize.define(
	"AddClass",
	{
		classCode: {
			type: Sequelize.STRING,
			allowNull: false
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false
		}
	},
	{
		tableName: "class",
		timestamps: false
	}
);

module.exports = {
	AddTeacher,
	AddStudent,
	AddSubject,
	AddClass
};
