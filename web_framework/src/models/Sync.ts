import { User } from './User';
import axios, { AxiosResponse } from 'axios';

const url = 'http://localhost:3000/users';

export class Sync {
	async fetch(id: number): Promise<void> {
		const response: AxiosResponse = await axios.get(`${url}/${id}}`);
		this.set(response.data);
	}

	async save(id: number): Promise<void> {
		if (id) {
			const response: AxiosResponse = await axios.put(
				`${url}/${id}`,
				this.props,
			);
		} else {
			const response: AxiosResponse = await axios.post(url, this.props);
		}
	}
}
