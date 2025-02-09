import { Request, Response } from "express"
import { service } from "../services/transactions.service"
import { transactionsModel } from "../models/transactions.model"
import { transactions } from "../types";
import { v4 } from "uuid";

class Controller {
	getAllHandler = async (req: Request, res: Response) => {
		try {
			const response = await service.getAll(transactionsModel);

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

			const response = await service.getByPk(id, transactionsModel);

			res.status(200).json({ data: response });
		}
		catch (err) {
			console.log(err);
			return res.status(500).json({ error: 'Server Error!' });
		}
	}

	createHandler = async (req: Request<{}, {}, { transaction: transactions }>, res: Response) => {
		try {
			const { transaction } = req.body

			// TODO: Add validation

			const newtransaction = {
				...transaction,
				id: v4()
			}

			await service.create(newtransaction, transactionsModel);

			res.status(200).json({ message: 'Transaction succefully created!' });
		}
		catch (err) {
			console.log(err);
			return res.status(500).json({ error: 'Server Error!' });
		}
	}

	updateHandler = async (req: Request<{ id: number }, {}, { transaction: transactions }>, res: Response) => {
		try {
			const { id } = req.params
			const { transaction } = req.body

			const response = await service.getByPk(id, transactionsModel)

			if (response == null) {
				return res.status(404).json({ error: 'Transaction not found' })
			}

			// TODO: Add validation for each argument

			response.setAttributes('description', transaction.description, {})
			response.setAttributes('amount', transaction.amount, {})
			response.setAttributes('date', transaction.date, {})
			response.setAttributes('type', transaction.type, {})
			response.setAttributes('interval', transaction.interval, {})
			response.setAttributes('category_id', transaction.category_id, {})
			response.setAttributes('user_id', transaction.user_id, {})

			await service.update(response);

			res.status(200).json({ message: 'Transaction succefully updated!' });
		}
		catch (err) {
			console.log(err);
			return res.status(500).json({ error: 'Server Error!' });
		}
	}

	deleteHandler = async (req: Request<{ id: number }, {}, {}>, res: Response) => {
		try {
			const { id } = req.params

			const response = await service.getByPk(id, transactionsModel)

			if (response == null) {
				return res.status(404).json({ error: 'Transaction not found' });
			}

			await service.delete(response);

			res.status(200).json({ message: 'Transaction succefully deleted!' });
		}
		catch (err) {
			console.log(err);
			return res.status(500).json({ error: 'Server Error!' });
		}
	}
}

export const controller = new Controller()
