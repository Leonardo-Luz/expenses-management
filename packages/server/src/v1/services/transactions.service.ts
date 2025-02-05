import { ModelStatic } from "sequelize"
import { transactionsInterface } from "../models/transactions.model"
import { transactions } from "../types"

class Service {
	getAll = async (model: ModelStatic<transactionsInterface>) => await model.findAll();

	getByPk = async (id: number, model: ModelStatic<transactionsInterface>) => await model.findByPk(id);

	create = async (body: transactions, model: ModelStatic<transactionsInterface>) =>
		await model.build({
			...body
		}).save();

	update = async (model: transactionsInterface) => await model.save();

	delete = async (model: transactionsInterface) => await model.destroy();
}

export const service = new Service();
