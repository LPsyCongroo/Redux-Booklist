// State argument is not application state but only the
// part of state that it is responsible for
export default function(state=null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  // defaulted to null because undefined throws an error 
  return state;
}