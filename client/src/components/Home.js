/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";

export default function Home() {
  const { userData } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    if (!userData.user) {
      history.push("/login");
    }
  }, []);
  return (
    <div>
      <h5>
        <Link to="/main">Chat</Link>
      </h5>
      <h5>
        <Link to="/create">New Post</Link>
      </h5>
      <h5>
        <Link to="/posts">View Posts</Link>
      </h5>
    </div>
  );
}
