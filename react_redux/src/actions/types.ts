import { DeleteTodoAction } from './index';
import { FetchTodoAction } from './todos';
export enum ActionTypes {
	FetchTodos,
	DeleteTodo,
}

export type Action = FetchTodoAction | DeleteTodoAction;
