import React, { Component } from "react"
import logoWhite from "./../../assets/logo2x.png"
import logo from "./../../assets/logo_green@2x.png"
import "./Dashboard.css"

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {}
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="Dashboard">
        <nav>
          <div className="nav-left" />
          <div className="nav-center">
            <img className="nav-center-logo" src={logoWhite} />
          </div>
          <div className="nav-right">
            <p>Evnti</p>
            <p>Statistiche</p>
            <p>Logout</p>
          </div>
        </nav>
        <div className="hero">
          <div className="hero-logo">
            <img src={logo} />
          </div>
          <div className="hero-header">
            <h2>Ham Holy Burger</h2>
            <p>gestisci i tuoi eventi</p>
          </div>
          <div className="hero-statistics">
            <div className="hero-statistics-left">
              <h3>23</h3>
              <hr className="green-underline" />
              <p>Eventi svolti</p>
            </div>
            <div className="hero-statistics-center">
              <h3>104</h3>
              <hr className="green-underline" />
              <p>Partecipanti</p>
            </div>
            <div className="hero-statistics-right">
              <h3>13</h3>
              <hr className="green-underline" />
              <p>Eventi attivi</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
