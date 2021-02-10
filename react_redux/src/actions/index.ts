import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

interface FetchTodoAction {
	type: ActionTypes.FetchTodos;
	payload: Todo[];
}

const url = 'http://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<Todo[]>(url);

		dispatch<FetchTodoAction>({
			type: ActionTypes.FetchTodos,
			payload: response.data,
		});
	};
};
