import { Model, Sequelize, DataTypes } from "sequelize";
import { database } from "../../config/database";
import { transactions } from "../types";

const sequelize = database.sequelize as Sequelize;

export interface transactionsInterface extends Model<transactions>,
	transactions { }

export const transactionsModel = sequelize.define<transactionsInterface>('transactions', {
	id: {
		primaryKey: true,
		type: DataTypes.STRING,
	},
	user_id: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	category_id: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	type: {
		allowNull: false,
		type: DataTypes.ENUM('income', 'expense'),
	},
	amount: {
		allowNull: false,
		type: DataTypes.DECIMAL(15, 2),
	},
	description: {
		allowNull: true,
		type: DataTypes.TEXT,
	},
	interval: {
		allowNull: false,
		type: DataTypes.ENUM('daily', 'weekly', 'monthly', 'yearly', 'none'),
	},
	date: {
		allowNull: false,
		type: DataTypes.DATE,
	},
	createdAt: {
		allowNull: false,
		type: DataTypes.DATE,
	},
	updatedAt: {
		allowNull: false,
		type: DataTypes.DATE,
	},
}, {
	timestamps: true,
	deletedAt: false,
});
