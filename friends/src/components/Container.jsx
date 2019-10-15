import React from "react";
import Login from "./Login";
import Friends from "./Friends";
import { Route, Link, withRouter, Redirect } from "react-router-dom";

export function Container(props) {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/friends">Friends</Link>
      </nav>
      <main>
        <Route exact path="/" component={Login} />
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
