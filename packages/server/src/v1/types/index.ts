import { AbstractDataTypeConstructor } from "sequelize";

export type users = {
	id: AbstractDataTypeConstructor,
	name: string,
	email?: string,
	cellphone?: string,
	createdAt: Date,
	updatedAt: Date,
}
export type categories = {
	id: AbstractDataTypeConstructor,
	name: string,
	createdAt: Date,
	updatedAt: Date,
}

export enum transaction_type {
	income = "income",
	expense = "expense"
}
export enum transaction_interval {
	daily = "daily",
	weekly = "weekly",
	monthly = "monthly",
	yearly = "yearly",
	none = "none"
}
export type transactions = {
	id: AbstractDataTypeConstructor;
	user_id: AbstractDataTypeConstructor;
	category_id: AbstractDataTypeConstructor;
	type: transaction_type;
	amount: string;
	description: string;
	interval: transaction_interval;
	date: string;
	createdAt: string;
	updatedAt: string;
}
