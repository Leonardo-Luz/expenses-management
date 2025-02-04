import { DATE, Model, Sequelize, STRING } from "sequelize";
import { database } from "../../config/database";
import { categories } from "../types";

const sequelize = database.sequelize as Sequelize;

export interface categoriesInterface extends Model<categories>,
	categories { }

export const categoriesModel = sequelize.define<categoriesInterface>(
	'categories',
	{
		id: {
			primaryKey: true,
			type: STRING,
		},
		name: {
			allowNull: false,
			type: STRING
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
