import { Sequelize } from "sequelize";

class Database {
	public sequelize: Sequelize | undefined;

	private POSTGRES_DB = process.env.POSTGRES_DB as string;
	private POSTGRES_HOST = (process.env.POSTGRES_HOST || 'localhost') as string;
	private POSTGRES_PORT = (process.env.POSTGRES_PORT || 5432) as unknown as number;
	private POSTGRES_USER = (process.env.POSTGRES_USER || 'postgres') as string;
	private POSTGRES_PASSWORD = (process.env.POSTGRES_PASSWORD || 'postgres') as unknown as string;

	constructor() {
		this.connectToPostgres()
	}

	private async connectToPostgres() {
		this.sequelize = new Sequelize(this.POSTGRES_DB, this.POSTGRES_USER, this.POSTGRES_PASSWORD, {
			database: this.POSTGRES_DB,
			username: this.POSTGRES_USER,
			password: this.POSTGRES_PASSWORD,
			host: this.POSTGRES_HOST,
			port: this.POSTGRES_PORT,
			dialect: 'postgres',
			logging: false
		});

		await this.sequelize.authenticate()
			.then(() => console.log('database connected!'))
			.catch(err => console.error('unable to connect to database', err));
	}
}

export const database = new Database()
