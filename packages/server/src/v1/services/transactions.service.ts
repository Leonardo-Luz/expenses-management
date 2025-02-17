import { ModelStatic } from "sequelize"
import { transactionsInterface } from "../models/transactions.model"
import { transactions } from "../types"
import { categoriesModel } from "../models/categories.model";
import { usersModel } from "../models/users.model";

class Service {
	getAll = async (model: ModelStatic<transactionsInterface>) => await model.findAll({
		include: [
			{ model: categoriesModel, required: true, foreignKey: 'category_id' },
			{ model: usersModel, required: true, foreignKey: 'user_id' },
		]
	});

	getByPk = async (id: number, model: ModelStatic<transactionsInterface>) => await model.findByPk(id, {
		include: [
			{ model: categoriesModel, required: true },
			{ model: usersModel, required: true },
		]
	});

	create = async (body: transactions, model: ModelStatic<transactionsInterface>) =>
		await model.build({
			...body
		}).save();

	update = async (model: transactionsInterface) => await model.save();

	delete = async (model: transactionsInterface) => await model.destroy();
}

export const service = new Service();
