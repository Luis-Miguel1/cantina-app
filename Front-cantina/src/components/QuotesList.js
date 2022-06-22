import React, { useState, useEffect } from 'react';

import axios from 'axios';

const client = axios.create({
	baseURL: 'http://localhost:3001',
});

const QuoteList= () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [posts, setPosts] = useState([]);

	// GET with Axios
	useEffect(() => {
		const fetchPost = async () => {
			try {
				let response = await client.get();
				setPosts(response.data.data);
                console.log(response.data.data);
			
                
			} catch (error) {
				console.log(error);
			}
		};
		fetchPost();
	}, []);



    return (
		<div className="app">
			<nav>
				<h1>POSTS APP</h1>
			</nav>
			
			<div className="posts-container">
				<h2>All Posts </h2>
				{posts.map((post) => {
                    
					return (
						<div className="post-card" key={post.id}>
							<h2 className="post-title">{post.quote}</h2>
							<p className="post-body">{post.author}</p>
							
						</div>
					);
				})}
			</div>
		</div>
	);
};


export default QuoteList;