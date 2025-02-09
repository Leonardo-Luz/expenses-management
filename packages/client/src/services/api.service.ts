import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const service = axios.create({
	baseURL: `${API_URL}`,
	timeout: 1000,
	headers: {
		'Content-type': 'application/json; charset=UTF-8',
	},
});
