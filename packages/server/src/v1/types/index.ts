export type users = {
	id: string,
	name: string,
	email: string | null,
	cellphone: string | null,
	createdAt: Date,
	updatedAt: Date,
}
export type categories = {
	id: string,
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
	id: string;
	user_id: string;
	category_id: string;
	type: transaction_type;
	amount: string;
	description: string;
	interval: transaction_interval;
	date: string;
	createdAt: string;
	updatedAt: string;
}
