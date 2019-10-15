import React, { useState, useEffect } from "react";
import withAuth from "../axios";
import Loader from "react-loader-spinner";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import { finished } from "stream";

const Loading = () => {
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress && <Loader type="ThreeDots" color="#2BAD60" />;
};

export default function Friends(props) {
  
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    trackPromise(
      withAuth()
        .get("http://localhost:5000/api/friends")
        .then(res => {
          setFriends(res.data);
        console.log(res)
        })
        .catch(err => {
          alert(err.response.data.error);
        })
    );
  }, []);

  const deleteFriend = (id) => {
    //   setFriends(friends.filter(friend => friend.id != id))
    withAuth().delete(`http://localhost:5000/api/friends/${id}`)
    .then(res => {
        console.log('success', res)
        setFriends(res.data)
    })
    .catch(err => {
        console.log('boo', err)
    })
  }

  return (
    <div>
      <Loading />
      {friends.map(friend => {
        return (
          <div key={friend.id}>
            <h3>Name:{friend.name}</h3>
            <p>Age:{friend.age}</p>
            <p>Email:{friend.email}</p>
            <button onClick={() => deleteFriend(friend.id)}>Delete Friend</button>
          </div>
        );
      })}
    </div>
  );
}
