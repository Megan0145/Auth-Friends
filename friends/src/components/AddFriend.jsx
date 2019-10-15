import React, { useRef, useState, useEffect } from "react";
import withAuth from "../axios";

export default function AddFriend(props) {
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();

  const addFriend = e => {
    e.preventDefault();
    withAuth()
      .post("http://localhost:5000/api/friends", {
        name: nameRef.current.value,
        age: ageRef.current.value,
        email: emailRef.current.value
      })
      .then(res => {
        debugger;
      })
      .catch(err => {
        debugger;
      });
  };

  return (
    <div>
      <form>
        <input placeholder="Name" ref={nameRef} type="text" />
        <input placeholder="Age" ref={ageRef} type="text" />
        <input placeholder="Email" ref={emailRef} type="text" />
        <button onClick={addFriend}>Add Friend</button>
      </form>
    </div>
  );
}
