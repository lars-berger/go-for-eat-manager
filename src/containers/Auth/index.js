import React from 'react'
import ReactDOM from 'react-dom'
import { Transition, animated } from 'react-spring'
import './Auth.css'
import logo from "../../assets/logo_green@2x.png"

import Register from "../../components/Register"
import Login from "../../components/Login"

const components = [
  style  => <animated.div style={{ ...style }}><Register /></animated.div>,
  style  => <animated.div style={{ ...style }}><Login /></animated.div>
]

export default class Auth extends React.PureComponent {
  constructor(props){
    super(props)
    this.state = {
      index: 0,
      inView: props.inView || 'nada'
    }
  }

  toggle = e => {
    this.setState(
      state => ({
        index: state.index === 1 ? 0 : state.index + 1
      })
    )
  }

  render() {
    return (
      <div className="auth-view">
        <div className="login-logo">
          <img src={logo} alt="login logo" />
        </div>
        <p className="switch-view" onClick={this.toggle}> Login / Register</p>
        <div className="main-transition" >
          <Transition
            native
            from={{ opacity: 0, transform: 'translate3d(80%,0,0)' }}
            enter={{ opacity: 1, transform: 'translate3d(-50%,0,0)' }}
            leave={{ opacity: 0, transform: 'translate3d(-80%,0,0)' }}>
            {components[this.state.index]}
          </Transition>
        </div>
      </div>
    )
  }
}
