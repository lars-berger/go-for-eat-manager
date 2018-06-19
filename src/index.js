import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Auth from "./containers/Auth"
import Dashboard from "./components/Dashboard"
import reducers from "./reducers"
import apiMiddleware from "./middleware/apiMiddleware"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(apiMiddleware))
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Auth} props="login"/>
        <Route exact path="/register" component={Auth} props="register" />
        <Route exact path="/dashboard" component={Dashboard} />
        {/* <Route path='/' component="show 404" /> */}
        {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
)
