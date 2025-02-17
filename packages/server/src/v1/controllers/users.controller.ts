import { Request, Response } from "express"
import { service } from "../services/users.service"
import { usersModel } from "../models/users.model"
import { users } from "../types";
import { v4 } from "uuid";

class Controller {
	getAllHandler = async (req: Request, res: Response) => {
		try {
			const response = await service.getAll(usersModel);

			res.status(200).json({ data: response });
		}
		catch (err) {
			console.log(err);
			return res.status(500).json({ error: 'Server Error!' });
		}
	}

	getByPkHandler = async (req: Request<{ id: number }, {}, {}>, res: Response) => {
		try {
			const { id } = req.params

			const response = await service.getByPk(id, usersModel);

			res.status(200).json({ data: response });
		}
		catch (err) {
			console.log(err);
			return res.status(500).json({ error: 'Server Error!' });
		}
	}

	createHandler = async (req: Request<{}, {}, { user: users }>, res: Response) => {
		try {
			const { user } = req.body

			// TODO: Add validation

			user.email = user.email?.trim() === "" ? null : user.email;

			user.cellphone = user.cellphone?.trim() === "" ? null : user.cellphone;


			const newUser = {
				...user,
				id: v4()
			}

			await service.create(newUser, usersModel);

			res.status(200).json({ message: 'User succefully created!' });
		}
		catch (err) {
			console.log(err);
			return res.status(500).json({ error: 'Server Error!' });
		}
	}

	updateHandler = async (req: Request<{ id: number }, {}, { user: users }>, res: Response) => {
		try {
			const { id } = req.params
			const { user } = req.body

			const response = await service.getByPk(id, usersModel)

			if (response == null) {
				return res.status(404).json({ error: 'User not found' })
			}

			// TODO: Add validation for each argument

			response.setDataValue('name', user.name)
			response.setDataValue('email', user.email)
			response.setDataValue('cellphone', user.cellphone)

			await service.update(response);

			res.status(200).json({ message: 'User succefully updated!' });
		}
		catch (err) {
			console.log(err);
			return res.status(500).json({ error: 'Server Error!' });
		}
	}

	deleteHandler = async (req: Request<{ id: number }, {}, {}>, res: Response) => {
		try {
			const { id } = req.params

			const response = await service.getByPk(id, usersModel)

			if (response == null) {
				return res.status(404).json({ error: 'User not found' });
			}

			await service.delete(response);

			res.status(200).json({ message: 'User succefully deleted!' });
		}
		catch (err) {
			console.log(err);
			return res.status(500).json({ error: 'Server Error!' });
		}
	}
}

export const controller = new Controller()
