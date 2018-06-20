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

  render() {
    return (
      <div className="NewEventModal">
        <div id="modal" className={this.state.showModal}>
          <div className="modal-container">
          <h2 className="login-header">New Event</h2>
            <form onSubmit={this.handleSubmit} className="modal-form">
              <p id="addnew-error"></p>
              <div className="form-field">
                <p className="addnew-label">Date:</p>
                <input onChange={this.handleChange} value={this.state.date} type="text" name="date" className="" />
              </div>
              <div className="form-field">
                <p className="addnew-label">Time:</p>
                <input onChange={this.handleChange} value={this.state.time} type="text" name="courier" placeholder="Optional" className="addnew-textfield" />
              </div>
              <div className="form-field">
                <p onClick={this.closeModal}>BUTTON</p>
                <input type="submit" className="btn addnew-submit" value="Confirm" />
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