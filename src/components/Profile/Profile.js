import React, {useState, useEffect} from "react";
import "./Profile.css";
import {db} from "../../firebase";
import firebase from "firebase";

import Avatar from "@material-ui/core/Avatar";

function Profile(id) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {}, []);

  return (
    <div className="profile">
      {/* Avatar Icon */}
      <div className="profile__info">
        <Avatar
          className="profile__avatar"
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
        {/* username */}
        <h1 className="profile__username">Carlosdevv</h1>
      </div>
      {/* Number of posts */}
      <div className="profile__postImages">
        <img
          className="profile__imagePost"
          src="https://images.unsplash.com/photo-1593874859865-ba989722a38d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        />
        <img
          className="profile__imagePost"
          src="https://images.unsplash.com/photo-1593874859865-ba989722a38d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        />
      </div>
      {/* All Posts from that specific User */}
    </div>
  );
}

export default Profile;
