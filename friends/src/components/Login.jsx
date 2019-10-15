import React, { useRef } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";

const Loading = () => {
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress && <Loader type="ThreeDots" color="#2BAD60" />;
};

export default function Login(props) {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmit = e => {
    e.preventDefault();
    trackPromise(
      axios
        .post("http://localhost:5000/api/login", {
          username: userNameRef.current.value,
          password: passwordRef.current.value
        })
        .then(res => {
          localStorage.setItem("token", res.data.payload);
          props.history.push("/friends");
        })
        .catch(err => {
          alert(err.response.data.error);
        })
    );
  };

  return (
    <div>
      <form>
        <input ref={userNameRef} placeholder="Username" type="text" />
        <input ref={passwordRef} placeholder="Password" type="text" />
        <button onClick={onSubmit}>Submit</button>
        <div>
          <Loading />
        </div>
      </form>
    </div>
  );
}
