import React from "react";
import {Todo} from "./types/todo";

interface TodoItemProps {
	item: Todo
	deleteEl: (id: string | number) => void
}

export const TodoItem = (props: TodoItemProps) => {
	const {item, deleteEl} = props

	return (
		<li key={item.id} onClick={() => deleteEl(item.id)} >{item.text}</li>
	)
}
