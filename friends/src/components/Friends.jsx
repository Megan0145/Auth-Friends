import React, { useState, useEffect, useRef } from "react";
import withAuth from "../axios";
import Loader from "react-loader-spinner";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";

const Loading = () => {
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress && <Loader type="ThreeDots" color="#2BAD60" />;
};

export default function Friends(props) {
  const [friends, setFriends] = useState([]);
  const [updating, setUpdating] = useState(false);
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    trackPromise(
      withAuth()
        .get("http://localhost:5000/api/friends")
        .then(res => {
          setFriends(res.data);
          console.log(res);
        })
        .catch(err => {
          alert(err.response.data.error);
        })
    );
  }, []);

  const deleteFriend = id => {
    //   setFriends(friends.filter(friend => friend.id != id))
    withAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(res => {
        console.log("success", res);
        setFriends(res.data);
      })
      .catch(err => {
        console.log("boo", err);
      });
  };

  const updateFriend = (e, id) => {
      e.preventDefault();
    withAuth().put(`http://localhost:5000/api/friends/${id}`, {
        name: 'amaegan',
        age: 'fddg',
        email: 'emailRef.current.value'
    })
    .then(res => alert('xfj'))
    .catch(err => {debugger})
  };

  return (
    <div>
      <Loading />
      {friends.map(friend => {
        return (
          <div className="friend-container">
            <div key={friend.id}>
              <h3>Name:{friend.name}</h3>
              <p>Age:{friend.age}</p>
              <p>Email:{friend.email}</p>
              <button onClick={() => deleteFriend(friend.id)}>
                Delete {friend.name} as a Friend
              </button>
              <button onClick={() => setUpdating(!updating)}>
                Update {friend.name}'s Details
              </button>
            </div>
            {updating ? (
              <div>
                <form>
                  <input type="text" ref={nameRef} placeholder="Name" />
                  <input type="text" ref={ageRef} placeholder="Age" />
                  <input type="text" ref={emailRef} placeholder="Email" />
                  <button onClick={() => updateFriend(friend.id)}>Go</button>
                </form>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
