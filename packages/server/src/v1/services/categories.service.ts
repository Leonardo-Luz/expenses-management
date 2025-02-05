import { ModelStatic } from "sequelize"
import { categoriesInterface } from "../models/categories.model"
import { categories } from "../types"

class Service {
	getAll = async (model: ModelStatic<categoriesInterface>) => await model.findAll();

	getByPk = async (id: number, model: ModelStatic<categoriesInterface>) => await model.findByPk(id);

	create = async (body: categories, model: ModelStatic<categoriesInterface>) =>
		await model.build({
			...body
		}).save();

	update = async (model: categoriesInterface) => await model.save();

	delete = async (model: categoriesInterface) => await model.destroy();
}

export const service = new Service();
