'use server';
import { createClient } from '@/utils/supabase/client';
import { revalidatePath } from 'next/cache';

export async function addTodo(todo){
	const supabase = createClient();
	const {data, error} = await supabase
			      .from('todo')
			      .insert({todo: todo.todo,
				      completed: todo.completed,})
			      .select();
	if(error){
		console.error("Error adding Todo-", error);
		return error;
	}else{
		console.log("Successfully added Todo");
		const msg = "Todo added successfully";
		revalidatePath('/');
		return msg;
	}

}

export async function updateTodoCompleted(isChecked, taskID){
	const supabase = createClient();
	const {data, error} = await supabase
			      .from('todo')
			      .update({completed: isChecked})
			      .eq('id', taskID)
			      .select();
	if(error){
		console.error("Error updating DB for input check-", error);
		return error;
	}else{
		console.log("Successfully updated DB for input change");
		const msg = "Task Updated successfully";
		revalidatePath('/');
		return msg;
	}
}

export async function updateTodoText(todoText, taskID){
	const supabase = createClient();
	const {data, error} = await supabase
			      .from('todo')
			      .update({todo: todoText})
			      .eq('id', taskID)
			      .select();
	if(error){
		console.error("Error updating DB for input Text-", error);
		return error;
	}else{
		console.log("Successfully updated DB for input change");
		const msg = "Task Text Updated successfully";
		revalidatePath('/');
		return msg;
	}

}

export async function deleteTodo(taskID){
	const supabase = createClient();
	const {data, error} = await supabase
			      .from('todo')
			      .delete()
			      .eq('id', taskID);
	if(error){
		console.error("Error updating DB for Delete todo-", error);
		return error;
	}else{
		console.log("Successfully updated DB for Delete todo");
		const msg = "Task Deleted successfully";
		revalidatePath('/');
		return msg;
	}

}
