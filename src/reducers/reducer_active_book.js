//all reducers get two arguments, the current state, and action
//state is not application state
//it's the piece of state this reducer is responsible for
//state = null handle before the first data capture happens
//redux does not allow undefined reducer 
export default function(state = null , action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state
}
