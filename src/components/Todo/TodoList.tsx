import React, {  useState }	 from "react";
import { TodoItem } from "./TodoItem";
import {Todo} from "./types/todo";

const TodoList = () => {
	const [value, setValue] = useState('');
	const [items, setItems] = useState<Todo[]>([]);

	const addItem = () => {
		if(value !== "") {
			setItems([...items, {
				id: Date.now(),
				text: value
			}])
			setValue('')
		}
	}

	const deleteItem = (id: string | number) => {
		const filteredItems = items.filter(item => item.id !== id);
		setItems([...filteredItems])
	}

	return (
		<div className="todo-list">
			<div className="header">
				<input value={value} placeholder="введите задачу" onChange={e => setValue(e.target.value)} />
				<button onClick={addItem}>Добавить</button>
			</div>

			{items.length > 0
				? <ul className="list">
					{items.map(item => (
						<TodoItem item={item} deleteEl={deleteItem} />
					))}
				</ul>
				: ''}
		</div>
	);
}

export default TodoList;
