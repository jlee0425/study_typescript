import React from 'react';
import { connect } from 'react-redux';
import { fetchTodos, deleteTodo, Todo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
	todos: Todo[];
	fetchTodos: Function;
	deleteTodo: typeof deleteTodo;
}

const App: React.FC<AppProps> = (props) => {
	const fetchTodos = (): void => {
		props.fetchTodos();
	};

	const deleteTodo = (id: number): void => {
		props.deleteTodo(id);
	};

	const renderList = (): JSX.Element[] => {
		return props.todos.map((todo: Todo) => {
			return (
				<div key={todo.id}>
					<button onClick={() => deleteTodo(todo.id)}>delete</button>
					{todo.title}
				</div>
			);
		});
	};

	return (
		<div>
			<h1>Todo App</h1>
			<button onClick={fetchTodos}>Fetch</button>
			{renderList()}
		</div>
	);
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
	return { todos };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(App);
