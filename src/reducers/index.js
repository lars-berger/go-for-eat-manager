
export default function(state = [], action) {
  switch (action.type) {
    case "REGISTER":
      return state
    case "REGISTER_SUCCESS":
      return {
        ...state, 
        token: action.res.restaurant.token
      } 
    default:
      return state
  }
}
