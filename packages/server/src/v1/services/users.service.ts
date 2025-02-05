import { ModelStatic } from "sequelize"
import { usersInterface } from "../models/users.model"
import { users } from "../types"

class Service {
	getAll = async (model: ModelStatic<usersInterface>) => await model.findAll();

	getByPk = async (id: number, model: ModelStatic<usersInterface>) => await model.findByPk(id);

	create = async (body: users, model: ModelStatic<usersInterface>) =>
		await model.build({
			...body
		}).save();

	update = async (model: usersInterface) => await model.save();

	delete = async (model: usersInterface) => await model.destroy();
}

export const service = new Service();
