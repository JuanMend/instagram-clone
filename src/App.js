import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';

function App() {
	const [posts, setPosts] = useState([
		{
			username: 'carlosdev',
			caption: 'Wow it works',
			imageUrl:
				'https://images.unsplash.com/photo-1593874859865-ba989722a38d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
		},
		{
			username: 'carlosdev',
			caption: 'Wow it works',
			imageUrl:
				'https://images.unsplash.com/photo-1593874859865-ba989722a38d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
		}
	]);

	// Runs a piece of code based on a specific condition
	useEffect(() => {
		// Where the code Runs
		// On Snapshot is a listener
		db.collection('posts').onSnapshot((snapshot) => {
			// every time a new post is added, this code fires
			snapshot.docs.map((doc) => doc.data());
		});
	}, []); // If it's empty its going to run once the page loads and it's not going to run again

	return (
		<div className="app">
			<div className="app__header">
				<img
					className="app__headerImage"
					src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
					alt="logo"
				/>
			</div>

			{posts.map((val) => {
				<Post username={val.username} caption={val.caption} imageUrl={val.imageUrl} />;
			})}
		</div>
	);
}

export default App;
