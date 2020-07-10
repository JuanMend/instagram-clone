import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
	const [posts, setPosts] = useState([]);
	return (
		<div className="app">
			<div className="app__header">
				<img
					className="app__headerImage"
					src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
					alt="logo"
				/>
			</div>
			<Post
				username="carlosdev"
				caption="Wow it works"
				imageUrl="https://images.unsplash.com/photo-1593874859865-ba989722a38d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
			/>
			<Post
				username="daveLink"
				caption="VRChat is Awesome"
				imageUrl="https://images.unsplash.com/photo-1593874859865-ba989722a38d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
			/>
			<Post
				username="Mario"
				caption="Fun Project"
				imageUrl="https://images.unsplash.com/photo-1593874859865-ba989722a38d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
			/>
		</div>
	);
}

export default App;
