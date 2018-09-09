import baseURL from '../config'

export default store => next => async (action) => {
  if (action.url) {

  await fetch(`${baseURL}${action.url}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(action.data)
    })
      .then(res => res.json())
      .then(res => {
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
