import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import './login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      address: '',
      googlePlaceData: {},
    }

  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitLogin = (e) => {
    e.preventDefault();
    fetch('http://192.168.1.148:5000/manager/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        address: this.state.address,
        googlePlaceData: this.state.googlePlaceData,
      })
    })
      .then(res => console.log('fdsafds', res))
      .then(res => console.log('fdsafds', res))
  }

  handleChange = (address) => {
    this.setState({ address })
  }

  handleSelect = (address) => {
    this.setState({address: address});

    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .catch(error => console.error('Error', error))
  }

  grabGooglePlacesData = (e) => {
    this.setState({googlePlaceData: e})
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
              <div className="input-field-checkbox">
                <input type="checkbox" className="filled-in" id="check" />
                <label className="checkbox-label" htmlFor="check">Resta connesso</label>
              </div>
              <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: 'Search Places ...',
                        className: 'location-search-input'
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {suggestions.map(suggestion => {
                        const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                          : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                          <div {...getSuggestionItemProps(suggestion, { className, style })}>
                            <span onClick={() => this.grabGooglePlacesData(suggestion)} >{suggestion.description}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
              <div className="button-wrapper">

                <input type="submit" className="btn" value="Accedi" />
              </div>
              <a className="login-forgot-password" href="#whatever"> password dimenticata</a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
