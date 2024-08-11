import ClientComp from '@/components/client-components/ClientComp';
import ServerComp from '@/components/server-components/ServerComp';
import FetchTodos from '@/components/server-components/FetchTodos';
import CompletedTodos from '@/components/server-components/CompletedTodos';
import AddForm from '@/components/server-components/AddForm';
import Link from 'next/link';

export default function HomePage(){
	return (
		<div>
			<Link href="/newsarticles">NewsArticles</Link>
			<h1>Add Task</h1>
			<AddForm />
			<FetchTodos />
			<CompletedTodos />
		</div>
	);
}
