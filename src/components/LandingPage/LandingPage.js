import React, {useState, useEffect} from "react";
import "./LandingPage.css";
import Post from "../Post/Post";

import {db, auth} from "../../firebase";
import InstagramEmbed from "react-instagram-embed";
import ImageUpload from "../ImageUpload/ImageUpload";
function LandingPage() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");

  // Runs a piece of code based on a specific condition
  useEffect(() => {
    // Where the code Runs
    // On Snapshot is a listener
    // Everytime a document changes, modifies it takes a snapshot of the document and it updates it
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // every time a new post is added, this code fires
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []); // If it's empty its going to run once the page loads and it's not going to run again

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has Logged in...
        setUser(authUser);
      } else {
        // User has logged out...
        setUser(null);
      }
    });

    return () => {
      // perform some cleanup actions
      unsubscribe();
    };
  }, [user, username]);
  return (
    <div>
      <div className="navbar__posts">
        <div className="navbar__postsLeft">
          {posts.map(({id, post}) => {
            return (
              <div>
                <Post
                  key={id}
                  postId={id}
                  user={user}
                  username={post.username}
                  caption={post.caption}
                  imageUrl={post.imageUrl}
                />
              </div>
            );
          })}
        </div>

        <div className="navbar__postsRight">
          <div className="navbar__loadContent">
            {user?.displayName ? (
              <ImageUpload username={user.displayName} />
            ) : (
              <h3>Login to upload/After Signup refresh the page</h3>
            )}
          </div>
          <InstagramEmbed
            className="navbar__embed"
            url="https://www.instagram.com/p/CCZvqv9F-jM/"
            maxWidth={320}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
