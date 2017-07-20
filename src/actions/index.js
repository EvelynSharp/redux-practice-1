export const selectBook = (book) => {
  //this is an action creator
  //return an action - an obj with type key
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
