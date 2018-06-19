const baseURL = "http://192.168.1.148:5000"



export default store => next => action => {
  console.log('>>>>>', action)
  console.log('>>>>>', action.url)

  if (action.url) {

    fetch(`${baseURL}${action.url}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(action.data)
    })
      .then(res => res.json())
      .then(res => {

        // console.log(res.restaurant.token);
        localStorage.setItem('go-for-eat-token', res.restaurant.token || '')   

        store.dispatch({
          ...action,
          type: action.type + '_SUCCESS',
          res
        })
        delete action.url;
      })
      .catch((err) => console.log(err))

     
  }

  next(action)
}

// 3 MAIN ACTION TYPES:
// 'REGISTER'
// 'LOGIN'
// 'DASHBOARD'
