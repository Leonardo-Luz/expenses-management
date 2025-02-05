import { DataTypes, Model, Sequelize } from "sequelize";
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
			type: DataTypes.STRING,
		},
		name: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: true,
		},
		email: {
			allowNull: true,
			type: DataTypes.STRING,
			unique: true,
		},
		cellphone: {
			allowNull: true,
			type: DataTypes.STRING,
			unique: true,
		},
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE
		},
		updatedAt: {
			allowNull: false,
			type: DataTypes.DATE
		},
	},
	{
		timestamps: true,
		deletedAt: false
	}
)
