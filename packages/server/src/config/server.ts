import express, { Application, Request, Response } from 'express';
import { database } from './database';

import { errorHandler, logger, rules } from '../v1/middlewares';
import {
	healthRouter,
	// categoriesRouter,
	// transictionsRouter,
	// usersRouter
} from '../v1/routes';


export class Server {
	private app: Application;
	private API_HOST = (process.env.POSTGRES_HOST || 'localhost') as string;
	private API_PORT = (process.env.POSTGRES_PORT || 3000) as unknown as number;

	constructor() {
		this.app = express();
		this.databaseSync();
		this.middlewares();
		this.routes();
		this.app.use(errorHandler);
	}

	private routes = () => {
		this.app.use('/api/v1/health', healthRouter);
		// this.app.use('/api/v1/users', categoriesRouter);
		// this.app.use('/api/v1/messages', transictionsRouter);
		// this.app.use('/api/v1/chats', usersRouter);

		this.app.use((req: Request, res: Response) => {
			res.status(404).json({ error: 'Not Found' });
		});
	};

	private middlewares = () => {
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(express.json());
		this.app.use(logger);
	};

	private databaseSync = async () => {
		try {
			await database.sequelize?.sync({ alter: true });
			console.log('Database synchronized successfully.');
		} catch (error) {
			console.error('Error synchronizing database:', error);
			process.exit(1);
		}
	};


	public start = async () => {
		try {
			await this.databaseSync();
			this.app.listen(this.API_PORT, this.API_HOST, () => {
				console.log(`Server listening at http://${this.API_HOST}:${this.API_PORT}`);
			});
		} catch (error) {
			console.error('Failed to start server:', error);
			process.exit(1);
		}
	};
}
