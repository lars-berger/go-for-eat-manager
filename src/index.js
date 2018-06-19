import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import { Router, Switch, Route } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"
import reducers from "./reducers"
import apiMiddleware from "./middleware/apiMiddleware"
import PrivateRoute from './components/PrivateRoute'


import createHistory from 'history/createBrowserHistory';
const history = createHistory();


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(apiMiddleware))
)

const whatever = 42;
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/dashboard" isLogged="true" component={Dashboard}/>
        {/* <Route path='/' component="show 404" /> */}
        {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
)
