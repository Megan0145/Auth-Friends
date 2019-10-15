import React, { useState, useEffect } from "react";
import withAuth from "../axios";

export default function Friends(props) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    withAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        alert(err.response.data.error)
      });
  }, []);

  return (
    <div>
      {friends.map(friend => {
       return <div>
          <h3>Name:{friend.name}</h3>
          <p>Age:{friend.age}</p>
          <p>Email:{friend.email}</p>
        </div>;
      })}
    </div>
  );
}
