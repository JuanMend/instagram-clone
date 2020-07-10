import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	}
}));

function App() {
	const classes = useStyles();
	const [modalStyle] = useState(getModalStyle());
	const [posts, setPosts] = useState([]);
	const [open, setOpen] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	// Runs a piece of code based on a specific condition
	useEffect(() => {
		// Where the code Runs
		// On Snapshot is a listener
		// Everytime a document changes, modifies it takes a snapshot of the document and it updates it
		db.collection('posts').onSnapshot((snapshot) => {
			// every time a new post is added, this code fires
			setPosts(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					post: doc.data()
				}))
			);
		});
	}, []); // If it's empty its going to run once the page loads and it's not going to run again

	const signUp = (e) => {};

	return (
		<div className="app">
			<Modal open={open} onClose={() => setOpen(false)}>
				<div style={modalStyle} className={classes.paper}>
					<form className="app__signup">
						<center>
							<img
								className="app__headerImage"
								src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
								alt="logo"
							/>
						</center>
						<Input
							placeholder="username"
							type="text"
							value={username}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input
							placeholder="email"
							type="text"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input
							placeholder="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Button onClick={signUp}>Sign Up</Button>
					</form>
				</div>
			</Modal>
			<div className="app__header">
				<img
					className="app__headerImage"
					src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
					alt="logo"
				/>
			</div>
			<Button onClick={() => setOpen(true)}>Sign Up</Button>

			{posts.map(({ id, post }) => {
				return (
					<div>
						<Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
					</div>
				);
			})}
		</div>
	);
}

export default App;
