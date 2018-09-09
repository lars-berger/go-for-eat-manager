import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      token: localStorage.getItem('go-for-eat-token')? localStorage.getItem('go-for-eat-token'): '',
      email: '',
      password: '',
      address: '',
      server: {
        response: '',
        status: ''
      },
    }

  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitLogin = (e) => {
    e.preventDefault();
    if (this.state.token) {
      console.log(this.state.token);
    }
    if (!this.state.email || !this.state.password) {
      console.log('no email or password');
      return
    }
    fetch("http://localhost:5000/manager/login", {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
        email: this.state.email,
        password: this.state.password
      }
    })
      .then(res => res.json())
      .then(res => {
        this.props.navigateTo("/dashboard");
      })
      .catch(err =>
        this.setState({ server: { response: err.toString() } })
      );
  }

  handleChange = (address) => {
    this.setState({ address })
  }


  render() {
    return (
      <div className="App">
        <div className="login-container">
          <div className="login-card">
            <form onSubmit={this.submitLogin} className="login-card-form" method="post">
              <h2 className="login-header">Login</h2>
              <div className="input-field">
                <input onChange={this.handleInputChange} type="text" name="email" id="email" value={this.state.email} />
                <label className="login-label" htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input onChange={this.handleInputChange} type="password" name="password" id="password" value={this.state.password} />
                <label className="login-label" htmlFor="password">Password</label>
              </div>
              <div className="button-wrapper">
                <label className="login-label" htmlFor="submit">{this.state.server.response?
                this.state.server.response:''}</label>
                <input type="submit" name="submit" className="btn" value="Log In" />
              </div>
              <a className="login-forgot-password" href="#whatever"> forgot your password?</a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
