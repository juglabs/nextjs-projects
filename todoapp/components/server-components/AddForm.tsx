import { addTodo } from '@/utils/dbUtils/DBUtils';
import { revalidatePath } from 'next/cache';

export default async function AddForm(){
	
	const handleForm = async (formData) => {
		'use server';
		const todoText = formData.get('todo');
		const created_at = new Date().toISOString();
		const completed = false;
		const todo = {
			todo: todoText,
			created_at: created_at,
			completed: completed,
		}
		const msg = await addTodo(todo);
		console.log(msg);
		revalidatePath('/');
	};

	return(
		<div>
			<form action={handleForm}>
				<input type="text" id="todo" name="todo" placeholder="Enter your task" />
				<button type="submit">Add</button>
			</form>
		</div>
	);
}
