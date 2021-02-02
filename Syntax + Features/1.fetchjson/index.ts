import axios from 'axios';

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/2';

const getData = async (url) => {
	const response = await axios.get(url);
	return response.data;
};

const logTodo = (id, title, completed) => {
	console.log(`
		id: ${id}
		title: ${title}
		completed: ${completed}
	`);
};
const response = getData(url);

axios.get(url).then((response) => {
	const { id, title, completed } = response.data as Todo;
	logTodo(id, title, completed);
});

console.log(response);
