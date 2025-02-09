import { Request, Response } from "express"
import { service } from "../services/categories.service"
import { categoriesModel } from "../models/categories.model"
import { categories } from "../types";
import { UUIDV4 } from "sequelize";
import { v4 } from "uuid";

class Controller {
	getAllHandler = async (req: Request, res: Response) => {
		try {
			const response = await service.getAll(categoriesModel);

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

			const response = await service.getByPk(id, categoriesModel);

			res.status(200).json({ data: response });
		}
		catch (err) {
			console.log(err);
			return res.status(500).json({ error: 'Server Error!' });
		}
	}

	createHandler = async (req: Request<{}, {}, { category: categories }>, res: Response) => {
		try {
			const { category } = req.body

			// TODO: Add validation

			console.log(category)

			const newCategory = {
				...category,
				id: v4()
			}

			await service.create(newCategory as any, categoriesModel);

			res.status(200).json({ message: 'Category succefully created!' });
		}
		catch (err) {
			console.log(err);
			return res.status(500).json({ error: 'Server Error!' });
		}
	}

	updateHandler = async (req: Request<{ id: number }, {}, { category: categories }>, res: Response) => {
		try {
			const { id } = req.params
			const { category } = req.body

			const response = await service.getByPk(id, categoriesModel)

			if (response == null) {
				return res.status(404).json({ error: 'Category not found' })
			}

			// TODO: Add validation for each argument

			response.setAttributes('name', category.name, {})

			await service.update(response);

			res.status(200).json({ message: 'Category succefully updated!' });
		}
		catch (err) {
			console.log(err);
			return res.status(500).json({ error: 'Server Error!' });
		}
	}

	deleteHandler = async (req: Request<{ id: number }, {}, {}>, res: Response) => {
		try {
			const { id } = req.params

			const response = await service.getByPk(id, categoriesModel)

			if (response == null) {
				return res.status(404).json({ error: 'Category not found' });
			}

			await service.delete(response);

			res.status(200).json({ message: 'Category succefully deleted!' });
		}
		catch (err) {
			console.log(err);
			return res.status(500).json({ error: 'Server Error!' });
		}
	}
}

export const controller = new Controller()
