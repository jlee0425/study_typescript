import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
	color?: string;
}

const App: React.FC<AppProps> = ({ color = 'blue' }) => {
	const [counter, setCounter] = useState(0);

	const onIncrement = (): void => {
		setCounter((c) => c + 1);
	};

	const onDecrement = (): void => {
		setCounter((c) => c - 1);
	};

	return (
		<div>
			<button onClick={onIncrement}>Increment</button>
			<br />
			<button onClick={onDecrement}>Decrement</button>
			<br />
			{counter}
		</div>
	);
};

ReactDOM.render(<App color='red' />, document.querySelector('#root'));
