import React from 'react';
import { connect } from 'react-redux';
import { fetchTodos, Todo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
	todos: Todo[];
	fetchTodos(): any;
}

const App: React.FC<AppProps> = (props) => {
	const fetchTodos = (): void => {
		props.fetchTodos();
	};

	const renderList = (): JSX.Element[] => {
		return props.todos.map(
			(todo: Todo): JSX.Element => {
				return <div key={todo.id}>{todo.title}</div>;
			},
		);
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

export default connect(mapStateToProps, { fetchTodos })(App);
