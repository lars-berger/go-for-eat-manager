
export default function(state = [], action) {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        loading: true,
        attempts: state.attempts ? state.attempts + 1 : 1
      } 
    case "REGISTER_SUCCESS":
      return {
        ...state, 
        token: action.res.restaurant.token,
        loading: false
      } 
    default:
      return state
  }
}
