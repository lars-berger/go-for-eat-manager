import React, { Component } from 'react';
import logo from './../../assets/logo_green@2x.png';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      address: '',
      googlePlaceData: {},
    }

  }

    // // create, Basic Auth for now
    // .post(
    //   '/manager/register/',
    //   managerController.createRestaurant.bind(managerController)
    // )
    // // get my info (login)
    // .get(
    //   '/manager/login/',
    //   managerController.getRestaurant.bind(managerController)
    // )
    // // edit my info 
    // .put(
    //   '/manager/restaurant/:id',
    //   managerController.editRestaurant.bind(managerController)
    // )


    // response is the following:

//     {
//     "status": "success",
//     "method": "basic",
//     "restaurant": {
//         "_id": "5b24ee0b8d568b10bdc2f1fe",
//         "email": "marre@bob.com",
//         "token": "f63d1ad9-8142-4907-a5b4-c031979bbd8b",
//         "googlePlaceData": {
//             "id": "b4b62ff1d6d37bc400ef967054b4914afda5966e",
//             "description": "Gött, Carrer d'Àvila, Barcelona, Spain",
//             "placeId": "ChIJuU91KBejpBIRotUBek2jPqE",
//             "active": true,
//             "index": 0,
//             "formattedSuggestion": {
//                 "mainText": "Gött",
//                 "secondaryText": "Carrer d'Àvila, Barcelona, Spain"
//             },
//             "matchedSubstrings": [
//                 "obj",
//                 "obj"
//             ],
//             "terms": [
//                 "uno",
//                 "dos",
//                 "tres"
//             ],
//             " types": [
//                 "establishment"
//             ]
//             }
//          }
//      }



  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitLogin = (e) => {
    e.preventDefault();
    fetch('http://192.168.1.148:5000/manager/register', {
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
          <div className="login-logo">
            <img src={logo} alt="login logo" />
          </div>
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

export default App;