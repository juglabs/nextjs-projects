'use client';
import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { updateTodoCompleted } from '@/utils/dbUtils/DBUtils';
import { updateTodoText } from '@/utils/dbUtils/DBUtils';
import { deleteTodo } from '@/utils/dbUtils/DBUtils';

export default function SingleTask({todo}){
	const [task, setTask] = useState({
				id: todo.id,
				todo: todo.todo,
				completed:todo.completed,
	});
	const initTaskCompleted = todo.completed;
	const [edit, setEdit] = useState(false);
	const [buttonEditDisabled, setButtonEditDisabled] = useState(initTaskCompleted || false);
	const [buttonSubmitDisabled, setButtonSubmitDisabled] = useState(initTaskCompleted || true);

	const handleChange = async (event) => {

		const isChecked = event.target.checked;
		setTask((prevTask)=> ({
			...prevTask,
			completed: isChecked,
		}));
		console.log("task.id-", task.id);
		console.log("task.completed-", isChecked);
		
		const taskID = todo.id;
		const msg = await updateTodoCompleted(isChecked, taskID);
		setButtonEditDisabled(isChecked || edit);
		setButtonSubmitDisabled(isChecked || !edit);
		console.log(msg);	
	};	

	const handleTextChange = async (event) => {
		const todoText = event.target.value;
		setTask((prevTask)=>({
			...prevTask,
			todo: todoText,
		}));
	}
	const handleEdit = () => {
		setEdit(true);
		setButtonEditDisabled(task.Completed || true);
		setButtonSubmitDisabled(task.Completed || false);

	};

	const handleSubmit = async () => {
		const taskID = todo.id;
		const todoText = task.todo;
		const msg = await updateTodoText(todoText, taskID);
		console.log(msg);
		setEdit(false);
		setButtonEditDisabled(task.Completed || false);
		setButtonSubmitDisabled(task.Completed || true);

	};
	let cont1;
	if (edit){
		cont1 = <input type="text" id={todo.id} value={task.todo} onChange={handleTextChange}/>;
	}else{
		if (task.completed){
			cont1 = <span><s>{todo.todo}</s></span>;
		}else{
			cont1= <span>{todo.todo}</span>;
		}
	}
	const handleDelete = async () => {
		const taskID = todo.id;
		const msg = await deleteTodo(taskID);
		console.log(msg);
	};
	
	return (
		<div key={todo.id}>
			<input type="checkbox" id={todo.id} value={task.completed} checked={task.completed} onChange={handleChange} />
			{cont1}
			<button id={todo.id} onClick={handleEdit} disabled={buttonEditDisabled}>Edit</button>
			<button id={todo.id} onClick={handleSubmit} disabled={buttonSubmitDisabled}>Submit</button>
			<button id={todo.id} onClick={handleDelete}>Delete</button>
		</div>
	);

}
