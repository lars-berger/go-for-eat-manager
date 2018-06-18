import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/dashboard' component={Dashboard} />
        {/* <Route path='/' component="show 404" /> */}
      </Switch>
    </Router>
  </Provider>
)


export default Root;