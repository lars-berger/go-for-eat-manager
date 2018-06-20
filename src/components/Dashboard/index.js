import React, { Component } from "react"
import EventList from './EventList';
import NewEventModal from './NewEventModal';
import logoWhite from "./../../assets/logo2x.png"
import logo from "./../../assets/logo_green@2x.png"
import "./Dashboard.css"

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      events: [],
      modalVisible: false,
    }
    this.fetchEvents();
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  fetchEvents = () => {

    fetch('https://go-for-eat.herokuapp.com/manager/partyof', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer: a6471e34-ed95-425c-af0d-ba1d598078fa',
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(events => {

        this.setState({ events: events })

      })
      .catch(err => {
        this.setState({ events: [] })
      })
  }



  eventList = () => {
    if (this.state.events.length > 0) {
      return (
        <div className="event-cards">
          {this.state.events.map(e => {
            return (
              <EventList when={e.when} time={e.time} attendees={e.attendees.length} partyOf={e.party_cipanti} offer={e.offer}/>
            )
          })}
        </div>
      )
    } else {
      return (
        <p> No events on your account </p>
      )
    }
  }

  openModal = (arg) => {
    if (arg === "saved") this.fetchEvents()
    this.setState({modalVisible: true})
  }

  closeModal = () => {
    this.setState({modalVisible: false})
  }

  render() {
    return (
      <div className="Dashboard">
        {(this.state.modalVisible) ? <NewEventModal closeModal={this.closeModal}/> : null}

        <nav>
          <div className="nav-left" />
          <div className="nav-center">
            <img className="nav-center-logo" src={logoWhite} />
          </div>
          <div className="nav-right">
            <p>Events</p>
            <p>Statistics</p>
            <p>Logout</p>
          </div>
        </nav>
        <div className="hero">
          <div className="hero-logo">
            <img className="hero-logo-img" src={logo} />
          </div>
          <div className="hero-header">
            <h2>Ham Holy Burger</h2>
            <p>manage your events</p>
          </div>
          <div className="hero-statistics">
            <div className="hero-statistics-left">
              <h3>23</h3>
              <hr className="green-underline" />
              <p>Events held</p>
            </div>
            <div className="hero-statistics-center">
              <h3>104</h3>
              <hr className="green-underline" />
              <p>Participants</p>
            </div>
            <div className="hero-statistics-right">
              <h3>13</h3>
              <hr className="green-underline" />
              <p>Active events</p>
            </div>
          </div>
        </div>
        <div className="events">
          <div className="events-header">
            <h1 className="dashboard-h1">Events</h1>
            <a onClick={this.openModal} className="btn-floating add-event-button">+</a>
            <div className="events-header-filters">
              <p>ALL</p>
              <p>PAST</p>
              <p>TODAY</p>
              <p>FUTURE</p>
            </div>
          </div>
          {this.eventList()}
        </div>
      </div>
    )
  }
}

export default Dashboard
