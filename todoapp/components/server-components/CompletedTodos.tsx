import { createClient } from '@/utils/supabase/client';
import SingleTask from '@/components/SingleTask';
import { revalidatePath } from 'next/cache';

export default async function FetchTodos(){
	const supabase = createClient();
	const {data, error} = await supabase
			      .from('todo')
			      .select()
			      .eq('completed', true);
	if (error){
		console.error("Error fetching todos-", error);
	}else{
		console.log("Successfully fetched todos");
	}
	revalidatePath('/');	
	return (
		<div>
		<h2>Completed Tasks</h2>
		<ul>
			{data?.map((todo) => (
				<li key={todo.id}>
					<SingleTask todo={todo} />
				</li>
			))}
		</ul>
		</div>
	);
}
