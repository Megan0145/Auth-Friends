import React, { useState } from "react";
import Login from "./Login";
import Friends from "./Friends";
import AddFriend from "./AddFriend";
import { Route, Link, withRouter, Redirect } from "react-router-dom";

export function Container(props) {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add_friend">Add Friends</Link>
        <Link to="/friends">Friends</Link>
      </nav>
      <main>
        <Route exact path="/" component={Login} />
        <Route
          exact
          path="/add_friend"
          render={props => withAuthCheck(AddFriend, props)}
        />
        <Route
          exact
          path="/friends"
          render={props => withAuthCheck(Friends, props)}
        />
      </main>
    </div>
  );
}
function withAuthCheck(Component, props) {
  return localStorage.getItem("token") ? (
    <Component {...props} />
  ) : (
    <Redirect to="/" />
  );
}

export default withRouter(Container);
