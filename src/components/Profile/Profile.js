import React, {useState, useEffect} from "react";
import {db} from "../../firebase";
import firebase from "firebase";
function Profile(id) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Welcome</h1>
      {/* Avatar Icon */}
      {/* {posts.map((post, id) => {
        return (
          <div key={id}>
            <h2>{post.username}</h2>
          </div>
        );
      })} */}

      {/* username */}
      {/* Number of posts */}
      {/* All Posts from that specific User */}
    </div>
  );
}

export default Profile;
