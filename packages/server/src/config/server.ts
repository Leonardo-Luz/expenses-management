import express, { Application, Request, Response } from 'express';
import { database } from './database';

import { errorHandler, logger, rules } from '../v1/middlewares';
import {
	healthRouter,
	categoriesRouter,
	transactionsRouter,
	usersRouter
} from '../v1/routes';


export class Server {
	private app: Application;
	private API_HOST = (process.env.POSTGRES_HOST || 'localhost') as string;
	private API_PORT = (process.env.POSTGRES_PORT || 3000) as unknown as number;

	constructor() {
		this.app = express();

		this.databaseSync();
		this.middlewares();

		this.app.use(rules)

		this.routes();
		this.app.use(errorHandler);
	}

	private routes = () => {
		this.app.use('/api/v1/health', healthRouter);
		this.app.use('/api/v1/users', categoriesRouter);
		this.app.use('/api/v1/messages', transactionsRouter);
		this.app.use('/api/v1/chats', usersRouter);

		this.app.use((req: Request, res: Response) => {
			res.status(404).json({ error: 'Not Found' });
		});
	};

	private middlewares = () => {
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(express.json());
		this.app.use(logger);
	};

	private databaseSync = () => {
		database.sequelize?.sync();
	};


	public start = () => {
		this.app.listen(this.API_PORT, this.API_HOST, () => {
			console.log(`Server listening at http://${this.API_HOST}:${this.API_PORT}`);
		});
	};
}
