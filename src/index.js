import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"

import { Router, Switch, Route } from "react-router-dom"
import Auth from "./containers/Auth"
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
        <Route exact path="/" component={Auth} props="login" />
        <Route exact path="/register" component={Auth}  props="register" />
        <PrivateRoute exact path="/dashboard" isLogged="true" component={Dashboard}/>

        {/* <Route path='/' component="show 404" /> */}
        {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
)
