import React, { useState } from 'react';
import './ImageUpload.css';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';
import { db, storage } from '../../firebase';

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
	root: {
		width: '100%'
	}
});

function ImageUpload({ username }) {
	const classes = useStyles();
	const [caption, setCaption] = useState('');
	const [image, setImage] = useState(null);
	const [progress, setProgress] = useState(0);

	const handleChange = (e) => {
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
		}
	};

	const handleUpload = () => {
		const uploadTask = storage.ref(`images/${image.name}`).put(image);
		uploadTask.on(
			'state_changed',
			(snapshot) => {
				//  progress function
				const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
				setProgress(progress);
			},
			(error) => {
				// Error Function
				console.log(error);
			},
			() => {
				// complete function
				storage.ref('images').child(image.name).getDownloadURL().then((url) => {
					// post image inside db
					db.collection('posts').add({
						// sort all the posts by the correct timing
						timestamp: firebase.firestore.FieldValue.serverTimestamp(),
						caption: caption,
						imageUrl: url,
						username: username
					});
					// After it's done set the progress back to zero
					setProgress(0);
					setCaption('');
					setImage(null);
				});
			}
		);
	};

	return (
		<div className="imageupload">
			{/* <progress className="imageupload__progress" value={progress} max="100" />
             */}
			<LinearProgress className="imageupload__progress" max="100" variant="determinate" value={progress} />

			<textarea
				className="imageupload__caption"
				type="text"
				value={caption}
				placeholder="Enter a caption"
				onChange={(e) => setCaption(e.target.value)}
			/>
			{/* <input type="file" onChange={handleChange} /> */}
			<input type="file" id="file" onChange={handleChange} />
			<label for="file">choose a file</label>
			<Button onClick={handleUpload} className="imageupload__button">
				Upload
			</Button>
		</div>
	);
}

export default ImageUpload;
