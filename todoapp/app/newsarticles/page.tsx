'use client';
import { useState } from 'react';

export default function NewsArticles(){

	const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=07137d37eebe488cb7f831dae635ff38';
	const [articles, setArticles] = useState([]);

	const handleFetch = async ()=> {
		var req = new Request(url);
		const response = await fetch(req);
		const data = await response.json();
		console.log(data.status, data.totalResults);
		console.log(data.articles[0].title);
		setArticles(data.articles);
	}
		return(
		<div>
			<button onClick={handleFetch}>Fetch Articles</button>
			<ul>
			{articles.map((a, index)=>(
				<li key={index}>{a.title}</li>
			))}
			</ul>
		</div>
	);
}
