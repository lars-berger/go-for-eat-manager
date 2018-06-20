import React from 'react';


class NewEventModal extends React.Component {
  constructor() {
    super();
    this.state = {
      date: '',
      time: '',
      particpants: '',
      offer: '',
      showModal: '',
    }
  }

  componentDidMount() {
    this.setState({showModal: 'modal-visible'});
  }
  
  componentWillUnmount() {
    this.setState({showModal: ''});
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://go-for-eat.herokuapp.com/manager/partyof/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain', 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${localStorage.getItem('go-for-eat-token')}`,
        
      },

      body: JSON.stringify({
       when: this.state.date,
       time: this.state.time,
       party_cipanti: this.state.participants,
       offer: this.state.offer,
      })
    })
    .then(res => res.json())
    .then(() => {
      this.props.closeModal("saved")
    })
    .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="NewEventModal">
        <div id="modal" className={this.state.showModal}>
          <div className="modal-container">
          <h2 className="login-header">New Event</h2>
            <form onSubmit={this.handleSubmit} className="modal-form">
              <p id="addnew-error"></p>
              <label>
                <select name="participants" >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
              </label>
              <div className="form-field">
                <p className="addnew-label">Date:</p>
                <input onChange={this.handleInputChange} value={this.state.date} type="text" name="date" className="" />
              </div>
              <div className="form-field">
                <p className="addnew-label">Time:</p>
                <input onChange={this.handleInputChange} value={this.state.time} type="text" name="time" placeholder="Optional" className="addnew-textfield" />
              </div>
              <div className="form-field">
                <p onClick={this.props.closeModal}>BUTTON</p>
                <input type="submit" className="btn addnew-submit" value="Confirm" />
              </div>
              <div className="form-field">
                <p className="addnew-label">Offer:</p>
                <input onChange={this.handleInputChange} type="text" name="offer" value={this.state.offer}/>
              </div>
            </form>
          </div>
        </div>
        <div onClick={this.props.closeModal} id="mask" className={this.state.showModal}></div>
      </div>
    )
  }
}

export default NewEventModal;