import React from "react"
import { Redirect, Route } from "react-router-dom"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('go-for-eat-token');
  console.log(token);
    return (
    <Route {...rest} render={(props) => (
      token
      ? <Component {...props} />
      :  <Redirect to={{
              pathname: "/",
              state: { from: props.location }
            }} />
    )}/>
  )
}

export default PrivateRoute
