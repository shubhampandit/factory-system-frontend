import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, adminOnly, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user) {
          return <Redirect to="/login" />;
        } else if (adminOnly && !(user.role === "ROLE_ADMIN")) {
          return <Redirect to="/unauthorized" />;
        }
        return <Component {...props} {...rest} />;
      }}
    />
  );
}

export default PrivateRoute;
