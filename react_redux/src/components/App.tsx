import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, deleteTodo, Todo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
	todos: Todo[];
	fetchTodos: Function;
	deleteTodo: typeof deleteTodo;
}
const App: React.FC<AppProps> = (props: AppProps) => {
	const [isFetching, setIsFetching] = useState(false);
	const fetched = props.todos.length === 200;

	useEffect(() => {
		if (props.todos.length !== 0) {
			setIsFetching(false);
		}
	}, [props.todos.length]);

	const fetchTodos = (): void => {
		setIsFetching(true);
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
			{fetched || <button onClick={fetchTodos}>Fetch</button>}
			{isFetching ? <div>Fetching</div> : renderList()}
		</div>
	);
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
	return { todos };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(App);
