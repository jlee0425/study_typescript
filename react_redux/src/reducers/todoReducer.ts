import { FetchTodoAction } from './../actions/index';
import { Todo } from '../actions';
import { ActionTypes } from '../actions/types';

export const todoReducer = (state: Todo[] = [], action: FetchTodoAction) => {
	switch (action.type) {
		case ActionTypes.FetchTodos:
			return action.payload;
		default:
			return state;
	}
};
