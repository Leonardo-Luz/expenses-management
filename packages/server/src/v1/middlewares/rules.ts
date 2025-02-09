import { NextFunction, Response, Request } from 'express';

export const rules = (req: Request, res: Response, next: NextFunction) => {

	const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];
	const origin = req.headers.origin;

	if (allowedOrigins.includes(origin!)) {
		res.header('Access-Control-Allow-Origin', origin!);
	}

	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
	res.header('Access-Control-Allow-Credentials', 'true');

	if (req.method === 'OPTIONS') {
		return res.status(200).json({});
	}
	next();
};
