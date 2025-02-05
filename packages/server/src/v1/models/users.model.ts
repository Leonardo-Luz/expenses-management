import { DATE, Model, Sequelize, STRING } from "sequelize";
import { database } from "../../config/database";
import { users } from "../types";

const sequelize = database.sequelize as Sequelize;

export interface usersInterface extends Model<users>,
	users { }

export const usersModel = sequelize.define<usersInterface>(
	'users',
	{
		id: {
			primaryKey: true,
			type: STRING,
		},
		name: {
			allowNull: false,
			type: STRING,
			unique: true,
		},
		email: {
			allowNull: true,
			type: STRING,
			unique: true,
		},
		cellphone: {
			allowNull: true,
			type: STRING,
			unique: true,
		},
		createdAt: {
			allowNull: false,
			type: DATE
		},
		updatedAt: {
			allowNull: false,
			type: DATE
		},
	},
	{
		timestamps: true,
		deletedAt: false
	}
)
